import React from "react";
import AppCard from "@devdocs/components/AppCard";
import PropTypes from "prop-types";
import StatGraphs from "./StatGraphs";
import { useIntl } from "react-intl";
import { AtcStaticType } from "@devdocs/types/models/dashboards/Crypto";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  data: AtcStaticType[];
};
const ATCStatics = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard title={<IntlMessages id="dashboard.crypto.atcStatics" />}>
      <StatGraphs data={data} />
    </AppCard>
  );
};

export default ATCStatics;
