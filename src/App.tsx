import React from "react";
import { TableToolbar } from "./components";
import MaterialTable from "./material-table";
import { Options } from "./material-table/types";
import { mockColumns, mockExportColumns } from "./mock-columns";
import { mockData } from "./mock-data";
import { createExportCsvFn, createExportPdfFn } from "./utils/export-data";

function App() {
  return (
    <MaterialTable
      columns={mockColumns}
      components={components}
      data={mockData}
      options={options}
    />
  );
}

const components = {
  Toolbar: (props: any) => <TableToolbar {...props} />,
};

const options: Options<object> & { exportPdf: Function } = {
  padding: "dense",
  // headerStyle: {
  //   fontSize: 12,
  // },
  // rowStyle: {
  //   fontSize: 12,
  // },
  exportCsv: createExportCsvFn(mockExportColumns),
  exportPdf: createExportPdfFn(mockExportColumns),
};

export default App;
