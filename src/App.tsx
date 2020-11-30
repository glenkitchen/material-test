import React from "react";
import { TableToolbar } from "./components";
import MaterialTable from "./material-table";
import { Options } from "./material-table/types";
import { testColumns } from "./test-columns";
import { testData } from "./test-data";

function App() {
  return (
    <MaterialTable
      columns={testColumns}
      components={components}
      data={testData}
      options={options}
    />
  );
}

const components = {
  Toolbar: (props: any) => <TableToolbar {...props} />,
};

const options: Options<object> = {
  filtering: true,
};

export default App;
