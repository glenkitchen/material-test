import { Icon, Menu, MenuItem, Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React, { useState } from "react";
import { defaultExportCsv, defaultExportPdf } from "../utils/export-data";

interface ExportButtonProps {
  columns: any[];
  data: any[];
  exportAllData: boolean;
  exportButton: any;
  exportCsv: (colums: any[], data: any[]) => {};
  exportDelimiter: string;
  exportFileName: string;
  exportPdf: (colums: any[], data: any[]) => {};
  getFieldValue: (rowData: any, columnDef: any, lookup?: boolean) => {};
  localization: any;
  renderData: any[];
  title: string;
}

const ExportButton: React.FC<ExportButtonProps> = (props) => {
  const {
    columns,
    data,
    exportAllData,
    exportCsv,
    exportDelimiter,
    exportFileName,
    exportPdf,
    getFieldValue,
    localization,
    renderData,
    title,
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const getFileName = () => {
    return exportFileName || title || "data";
  };
  const getColumns = () => {
    return columns
      .filter(
        (columnDef) =>
          (!columnDef.hidden || columnDef.export === true) &&
          columnDef.export !== false &&
          columnDef.field
      )
      .sort((a, b) =>
        a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1
      );
  };

  const getTableData = () => {
    const exportColumns = getColumns();
    const exportData = (exportAllData ? data : renderData).map((rowData) =>
      exportColumns.map((columnDef) => getFieldValue(rowData, columnDef))
    );
    return [exportColumns, exportData];
  };

  const onExportCsv = () => {
    if (exportCsv) {
      exportCsv(columns, data);
    } else {
      const [calculatedColumns, calculatedData] = getTableData();
      const fileName = getFileName();
      defaultExportCsv(
        calculatedColumns,
        calculatedData,
        fileName,
        exportDelimiter
      );
    }
    setAnchorEl(null);
  };

  const onExportPdf = () => {
    if (exportPdf) {
      exportPdf(columns, props.data);
    } else {
      const [calculatedColumns, calculatedData] = getTableData();
      const fileName = getFileName();
      defaultExportPdf(calculatedColumns, calculatedData, fileName);
    }
    setAnchorEl(null);
  };

  return (
    <span>
      <Tooltip title={localization.exportTitle || "Export"}>
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <Icon>save_alt</Icon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem key="export-csv" onClick={onExportCsv}>
          {localization.exportCSVName || "Export Csv"}
        </MenuItem>
        <MenuItem key="export-pdf" onClick={onExportPdf}>
          {localization.exportPDFName || "Export Pdf"}
        </MenuItem>
      </Menu>
    </span>
  );
};

export default ExportButton;
