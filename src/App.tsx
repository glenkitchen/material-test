import React from "react";
import MaterialTable from "./material-table";
import { Options } from "./material-table/types";
import { testColumns } from "./test-columns";
import { testData } from "./test-data";

function App() {
  return (
    <MaterialTable columns={testColumns} data={testData} options={options} />
  );
}

const options: Options<object> = {
  filtering: true,
};

export default App;
