import {
  Icon,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
  Tooltip,
} from "@material-ui/core";
import React, { useState } from "react";
import DataManager from "../material-table/utils/data-manager";

interface TableSearchProps {
  dataManager: DataManager;
  localization: any;
  onSearchChanged: (text: string) => {};
  searchAutoFocus?: boolean;
  searchFieldVariant?: "filled" | "standard" | "outlined";
  searchText: string;
}

const TableSearch: React.FC<TableSearchProps> = (props) => {
  const {
    dataManager,
    localization,
    onSearchChanged,
    searchAutoFocus,
    searchText,
    searchFieldVariant,
  } = props;

  const classes = useStyles();

  const [value, setValue] = useState(searchText);

  const onSearchChange = (searchText: string) => {
    dataManager.changeSearchText(searchText);
    setValue(searchText);
    onSearchChanged(searchText);
  };

  return (
    <TextField
      autoFocus={searchAutoFocus}
      className={classes.root}
      value={value}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder={localization.searchPlaceholder}
      variant={searchFieldVariant}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tooltip title={localization.searchTooltip || "Search"}>
              <Icon fontSize="small">search</Icon>
            </Tooltip>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled={!value} onClick={() => onSearchChange("")}>
              <Icon fontSize="small">clear</Icon>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
}));

export default TableSearch;
