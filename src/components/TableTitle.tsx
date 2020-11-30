import { makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

interface TableTitleProps {
  title: string;
}

const TableTitle: FC<TableTitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.root}>
      {title}
    </Typography>
  );
};

const useStyles = makeStyles({
  root: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default TableTitle;
