import React from "react";
import AppCard from "@devdocs/components/AppCard";
import AppList from "@devdocs/components/AppList";
import RecentActivityCell from "./RecentActivityCell";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import AppMenu from "@devdocs/components/AppMenu";
import { RecentActivityType } from "@devdocs/types/models/dashboards/CRM";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  data: RecentActivityType[];
};
const RecentActivities = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.recentActivities" />}
      action={<AppMenu />}
    >
      <AppScrollbar
        sx={{
          height: 640,
        }}
      >
        <AppList
          data={data}
          renderRow={(activity) => (
            <RecentActivityCell key={activity.id} activity={activity} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivities;
