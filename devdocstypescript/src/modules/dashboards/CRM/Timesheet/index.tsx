import React from "react";
import AppCard from "@devdocs/components/AppCard";
import TimesheetTable from "./TimesheetTable";
import { TimesheetType } from "@devdocs/types/models/dashboards/CRM";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  timesheet: TimesheetType[];
};
const Timesheet = ({ timesheet }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.timesheet" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <TimesheetTable timesheet={timesheet} />
    </AppCard>
  );
};

export default Timesheet;
