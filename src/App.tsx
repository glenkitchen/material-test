import React from "react";
import MaterialTable from "./material-table";
import { testColumns } from "./test-columns";
import { testData } from "./test-data";

function App() {
  return <MaterialTable columns={testColumns} data={testData} />;
}

export default App;
