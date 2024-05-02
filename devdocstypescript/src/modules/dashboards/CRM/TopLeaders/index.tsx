import React from "react";
import AppCard from "@devdocs/components/AppCard";
import TopLeadersTable from "./TopLeadersTable";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { TopLeaderType } from "@devdocs/types/models/dashboards/CRM";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  topLeaders: TopLeaderType[];
};
const TopLeaders = ({ topLeaders }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.topLeaders" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <TopLeadersTable topLeaders={topLeaders} />
    </AppCard>
  );
};

export default TopLeaders;
TopLeaders.propTypes = {
  topLeaders: PropTypes.array,
};
