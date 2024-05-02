import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHeader from "@devdocs/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Project</TableCell>
      <TableCell>Date</TableCell>
      <TableCell>Start time</TableCell>
      <TableCell>Stop time</TableCell>
      <TableCell>Duration</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
