import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@devdocs/components/AppTableContainer';
import AppScrollbar from '@devdocs/components/AppScrollbar';
import { TimesheetType } from '@devdocs/types/models/dashboards/CRM';

type Props = {
  timesheet: TimesheetType[];
};
const TimesheetTable = ({ timesheet = [] }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 235 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {timesheet.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default TimesheetTable;

TimesheetTable.propTypes = {
  timesheet: PropTypes.array,
};
