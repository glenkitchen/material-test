import { Toolbar } from "@material-ui/core";
import React from "react";
import { ColumnsButton, ExportButton, TableSearch, TableTitle } from ".";

const TableToolbar = (props: any) => {
  const {
    columns,
    data,
    dataManager,
    exportButton,
    exportCsv,
    exportPdf,
    localization,
    onColumnsChanged,
    onSearchChanged,
    title,
    searchAutoFocus,
    searchFieldVariant,
    searchText,
  } = props;

  return (
    <Toolbar>
      <TableTitle title={title} />
      <TableSearch
        dataManager={dataManager}
        localization={localization}
        onSearchChanged={onSearchChanged}
        searchAutoFocus={searchAutoFocus}
        searchFieldVariant={searchFieldVariant}
        searchText={searchText}
      />
      <ColumnsButton
        columns={columns}
        localization={localization}
        onColumnsChanged={onColumnsChanged}
      />
      <ExportButton
        columns={columns}
        data={data}
        exportButton={exportButton}
        exportCsv={exportCsv}
        exportPdf={exportPdf}
        localization={localization}
      />
    </Toolbar>
  );
};

export default TableToolbar;
