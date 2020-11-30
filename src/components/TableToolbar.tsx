import { Toolbar } from "@material-ui/core";
import React from "react";
import { TableSearch, TableTitle } from ".";

const TableToolbar = (props: any) => {
  const {
    dataManager,
    localization,
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
    </Toolbar>
  );
};

export default TableToolbar;
