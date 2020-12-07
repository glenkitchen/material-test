declare module "filefy" {
  export class CsvBuilder {
    setDelimeter(setDelimeter: string): CsvBuilder;
    setColumns(columns: string[]): CsvBuilder;
    addRows(rows: any): CsvBuilder;
    exportFile();
    constructor(filename: string);
  }
}
