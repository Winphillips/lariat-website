const DEFAULT_SPREADSHEET_ID = "1ZBKK2wc7HDZ2y7QtMg6OZ4rVJaHKNpAyy1V8hPc7QoQ";

export type SheetCellValue = string | number | boolean | null;

interface FetchSheetOptions {
  sheetName?: string;
  spreadsheetId?: string;
}

interface GvizCell {
  v: SheetCellValue;
}

interface GvizRow {
  c: Array<GvizCell | null>;
}

interface GvizResponse {
  table: {
    rows: GvizRow[];
  };
}

const getSpreadsheetId = () =>
  import.meta.env.VITE_LARIAT_SHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;

const buildSheetUrl = ({ sheetName, spreadsheetId }: FetchSheetOptions = {}) => {
  const activeSpreadsheetId = spreadsheetId?.trim() || getSpreadsheetId();
  const url = new URL(`https://docs.google.com/spreadsheets/d/${activeSpreadsheetId}/gviz/tq`);
  url.searchParams.set("tqx", "out:json");
  url.searchParams.set("nocache", `${Date.now()}`);

  if (sheetName) {
    url.searchParams.set("sheet", sheetName);
  }

  return url.toString();
};

const parseGvizResponse = (text: string): GvizResponse => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("gviz JSON not found");
  }

  return JSON.parse(text.slice(start, end + 1)) as GvizResponse;
};

export const normalizeSheetCell = (value: SheetCellValue) =>
  value == null ? "" : String(value).trim();

export const fetchSheetRows = async (options: FetchSheetOptions = {}): Promise<SheetCellValue[][]> => {
  const response = await fetch(buildSheetUrl(options));

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const text = await response.text();
  const json = parseGvizResponse(text);

  return json.table.rows.map((row) => row.c.map((cell) => cell?.v ?? null));
};
