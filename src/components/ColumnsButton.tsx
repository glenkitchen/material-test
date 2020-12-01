import {
  Checkbox,
  IconButton,
  makeStyles,
  MenuItem,
  Theme,
} from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { Menu, Tooltip } from "@material-ui/core";
import React, { useState } from "react";

interface ColumnsButtonProps {
  columns: any[];
  localization: any;
  onColumnsChanged: (column: any, hidden: boolean) => {};
}

const ColumnsButton: React.FC<ColumnsButtonProps> = (props) => {
  const { columns, localization, onColumnsChanged } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <span>
      <Tooltip title={localization.showColumnsTitle || "Show Columns"}>
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <Icon>view_column</Icon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem key={"text"} disabled className={classes.addRemoveItem}>
          {localization.addRemoveColumns || "Add or Remove Columns"}
        </MenuItem>
        {columns
          .filter((col) => !col.hidden || col.hiddenByColumnsButton)
          .map((col) => (
            <li key={col.tableData.id}>
              <MenuItem
                className={classes.menuItem}
                component="label"
                htmlFor={`column-toggle-${col.tableData.id}`}
                disabled={col.removable === false}
              >
                <Checkbox
                  checked={!col.hidden}
                  id={`column-toggle-${col.tableData.id}`}
                  onChange={() => onColumnsChanged(col, !col.hidden)}
                />
                <span>{col.title}</span>
              </MenuItem>
            </li>
          ))}
      </Menu>
    </span>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  addRemoveItem: {
    fontWeight: 600,
    fontSize: 12,
  },
  menuItem: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default ColumnsButton;
