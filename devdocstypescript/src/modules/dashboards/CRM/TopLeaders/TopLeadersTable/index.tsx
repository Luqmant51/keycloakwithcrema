import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@devdocs/components/AppTableContainer";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import { TopLeaderType } from "@devdocs/types/models/dashboards/CRM";

type Props = {
  topLeaders: TopLeaderType[];
};
const TopLeadersTable = ({ topLeaders = [] }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 340 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {topLeaders.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default TopLeadersTable;
