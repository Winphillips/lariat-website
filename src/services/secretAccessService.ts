import { fetchSheetRows, normalizeSheetCell, type SheetCellValue } from "@/services/googleSheets";

const SECRET_ACCESS_SESSION_KEY = "lariat.secret.access";
const SECRET_SHEET_NAME = import.meta.env.VITE_SECRET_SHEET_NAME?.trim() || "Secret";
const SECRET_SPREADSHEET_ID = import.meta.env.VITE_SECRET_SHEET_ID?.trim() || undefined;

let passwordPromise: Promise<string | null> | null = null;

const extractPassword = (rows: SheetCellValue[][]) => {
  const normalizedRows = rows.map((row) => row.map((value) => normalizeSheetCell(value)));
  const nonEmptyRows = normalizedRows.filter((row) => row.some(Boolean));

  if (nonEmptyRows.length === 0) {
    return null;
  }

  const headerRow = nonEmptyRows[0].map((value) => value.toLowerCase());
  const passwordColumnIndex = headerRow.findIndex((value) => value === "password");

  if (passwordColumnIndex !== -1) {
    for (const row of nonEmptyRows.slice(1)) {
      const password = row[passwordColumnIndex];

      if (password) {
        return password;
      }
    }
  }

  for (const row of nonEmptyRows) {
    if (row[0]?.toLowerCase() === "password" && row[1]) {
      return row[1];
    }
  }

  for (const row of nonEmptyRows) {
    const loneValue = row.filter(Boolean);

    if (loneValue.length === 1) {
      return loneValue[0];
    }
  }

  return null;
};

const loadSecretPassword = async () => {
  const rows = await fetchSheetRows({
    sheetName: SECRET_SHEET_NAME,
    spreadsheetId: SECRET_SPREADSHEET_ID,
  });
  return extractPassword(rows);
};

export const getSecretPassword = async () => {
  if (!passwordPromise) {
    passwordPromise = loadSecretPassword().catch((error) => {
      passwordPromise = null;
      throw error;
    });
  }

  return passwordPromise;
};

export const primeSecretPasswordCache = () => {
  void getSecretPassword().catch(() => undefined);
};

export const hasSecretAccess = () => sessionStorage.getItem(SECRET_ACCESS_SESSION_KEY) === "true";

export const grantSecretAccess = () => {
  sessionStorage.setItem(SECRET_ACCESS_SESSION_KEY, "true");
};
