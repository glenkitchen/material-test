import { CsvBuilder } from "filefy";
import "jspdf-autotable";
const jsPDF = typeof window !== "undefined" ? require("jspdf").jsPDF : null;

const getTitles = (columns: { title: string }[]) => {
  return columns.map((col) => col.title);
};

const getRows = (columns: { field: string }[], data: any[]) => {
  return data.map((row) => columns.map((col) => row[col.field]));
};

export const createExportCsvFn = (exportColumns: any[]) => {
  return (_columns: any[], data: any[]) => {
    const rows = getRows(exportColumns, data);
    defaultExportCsv(exportColumns, rows);
  };
};

export const createExportPdfFn = (exportColumns: any[]) => {
  return (_columns: any[], data: any[]) => {
    const rows = getRows(exportColumns, data);
    defaultExportPdf(exportColumns, rows);
  };
};

export const defaultExportCsv = (
  columns: any[],
  rows: any[],
  fileName: string = "data",
  exportDelimiter: string = ","
) => {
  const builder = new CsvBuilder(fileName + ".csv");
  builder
    .setDelimeter(exportDelimiter)
    .setColumns(getTitles(columns))
    .addRows(rows)
    .exportFile();
};

export const defaultExportPdf = (
  columns: any[],
  rows: any[],
  fileName: string = "data"
) => {
  if (jsPDF !== null) {
    let content = {
      startY: 50,
      head: [getTitles(columns)],
      body: rows,
    };
    const unit = "pt";
    const size = "A4";
    const orientation = "landscape";
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    doc.text(fileName, 40, 40);
    doc.autoTable(content);
    doc.save(fileName + ".pdf");
  }
};
