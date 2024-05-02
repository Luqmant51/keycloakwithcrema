import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@devdocs/components/AppTableContainer";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import { DealsTableDaumType } from "@devdocs/types/models/dashboards/CRM";

type Props = {
  dealsTableData: DealsTableDaumType[];
};
const DealsTable = ({ dealsTableData = [] }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 250 }}>
        <Table className="table" stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {dealsTableData.map((row) => (
              <TableItem row={row} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default DealsTable;
