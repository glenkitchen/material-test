import { Icon, Menu, MenuItem, Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React, { useState } from "react";

interface ExportButtonProps {
  columns: any[];
  data: any[];
  exportButton: any;
  exportCsv: (colums: any[], data: any[]) => {};
  exportPdf: (colums: any[], data: any[]) => {};
  localization: any;
}

const ExportButton: React.FC<ExportButtonProps> = (props) => {
  const {
    columns,
    data,
    exportCsv,
    exportPdf,
    exportButton,
    localization,
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const defaultExportCsv = () => {
    // const [columns, data] = this.getTableData();
    // let fileName = this.props.title || "data";
    // if (this.props.exportFileName) {
    //   fileName =
    //     typeof this.props.exportFileName === "function"
    //       ? this.props.exportFileName()
    //       : this.props.exportFileName;
    // }
    // const builder = new CsvBuilder(fileName + ".csv");
    // builder
    //   .setDelimeter(this.props.exportDelimiter)
    //   .setColumns(columns.map((columnDef) => columnDef.title))
    //   .addRows(data)
    //   .exportFile();
  };

  const defaultExportPdf = () => {
    // if (jsPDF !== null) {
    //   const [columns, data] = this.getTableData();
    //   let content = {
    //     startY: 50,
    //     head: [columns.map((columnDef) => columnDef.title)],
    //     body: data,
    //   };
    //   const unit = "pt";
    //   const size = "A4";
    //   const orientation = "landscape";
    //   const doc = new jsPDF(orientation, unit, size);
    //   doc.setFontSize(15);
    //   doc.text(this.props.exportFileName || this.props.title, 40, 40);
    //   doc.autoTable(content);
    //   doc.save(
    //     (this.props.exportFileName || this.props.title || "data") + ".pdf"
    //   );
    // }
  };

  const handleExportCsv = () => {
    if (exportCsv) {
      exportCsv(columns, data);
    } else {
      defaultExportCsv();
    }
    setAnchorEl(null);
  };

  const handleExportPdf = () => {
    if (exportPdf) {
      exportPdf(columns, props.data);
    } else {
      defaultExportPdf();
    }
    setAnchorEl(null);
  };

  return (
    <span>
      <Tooltip title={localization.exportTitle}>
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <Icon>export</Icon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {(exportButton === true || exportButton.csv) && (
          <MenuItem key="export-csv" onClick={handleExportCsv}>
            {localization.exportCSVName}
          </MenuItem>
        )}
        {(exportButton === true || exportButton.pdf) && (
          <MenuItem key="export-pdf" onClick={handleExportPdf}>
            {localization.exportPDFName}
          </MenuItem>
        )}
      </Menu>
    </span>
  );
};

export default ExportButton;
