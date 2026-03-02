import { fetchSheetRows, normalizeSheetCell, type SheetCellValue } from "@/services/googleSheets";

export interface Show {
  date: string;
  doors: string;
  showTime: string;
  venue: string;
  city: string;
  tickets: string;
  coords: string;
  price: string;
  with: string;
}

const SHOWS_SHEET_NAME = import.meta.env.VITE_SHOWS_SHEET_NAME?.trim() || undefined;

const formatDate = (raw: string) => {
  const match = raw.match(/Date\((\d+),(\d+),(\d+)\)/);

  if (!match) {
    return raw;
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) + 1;
  const day = parseInt(match[3], 10);

  return `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${year}`;
};

const formatTime = (raw: string) => {
  const match = raw.match(/Date\(1899,11,30,(\d+),(\d+)/);

  if (!match) {
    return raw;
  }

  let hours = parseInt(match[1], 10);
  const minutes = match[2].padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
};

const toShow = (row: SheetCellValue[]): Show | null => {
  const cells = row.map((value) => normalizeSheetCell(value));

  if (cells.every((value) => value === "")) {
    return null;
  }

  return {
    date: formatDate(cells[0] || ""),
    doors: formatTime(cells[1] || ""),
    showTime: formatTime(cells[2] || ""),
    venue: cells[3] || "",
    city: cells[4] || "",
    tickets: cells[5] || "",
    coords: cells[6] || "",
    price: cells[7] || "",
    with: cells[8] || "",
  };
};

export const getShows = async () => {
  const rows = await fetchSheetRows({ sheetName: SHOWS_SHEET_NAME });

  return rows.map(toShow).filter((show): show is Show => show !== null);
};
