import { Toolbar } from "@material-ui/core";
import React from "react";
import { ColumnsButton, ExportButton, TableSearch, TableTitle } from ".";

const TableToolbar = (props: any) => {
  const {
    columns,
    data,
    dataManager,
    exportAllData,
    exportButton,
    exportCsv,
    exportDelimiter,
    exportFileName,
    exportPdf,
    getFieldValue,
    localization,
    onColumnsChanged,
    onSearchChanged,
    renderData,
    searchAutoFocus,
    searchFieldVariant,
    searchText,
    title,
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
        exportAllData={exportAllData}
        exportButton={exportButton}
        exportCsv={exportCsv}
        exportDelimiter={exportDelimiter}
        exportFileName={exportFileName}
        exportPdf={exportPdf}
        getFieldValue={getFieldValue}
        localization={localization}
        renderData={renderData}
        title={title}
      />
    </Toolbar>
  );
};

export default TableToolbar;
