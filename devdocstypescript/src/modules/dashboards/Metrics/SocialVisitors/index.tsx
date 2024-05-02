import React from "react";
import SocialVisitorsGraph from "./SocialVisitorsGraph";
import Categories from "./Categories";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import { SocialVisitorsType } from "@devdocs/types/models/dashboards/Metrics";

type SocialVisitorsProps = {
  data: SocialVisitorsType[];
};

const SocialVisitors: React.FC<SocialVisitorsProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.socialVisitors"] as string}
      action={messages["common.viewAll"] as string}
    >
      <SocialVisitorsGraph data={data} />

      <Categories data={data} />
    </AppCard>
  );
};

export default SocialVisitors;