import React from "react";
import AppCard from "@devdocs/components/AppCard";
import GainerLooserTable from "./GainerLooserTable";
import { GainerLooserType } from "@devdocs/types/models/dashboards/Crypto";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  data: GainerLooserType[];
};
const GainerLooser = ({ data }: Props) => {
  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={<IntlMessages id="dashboard.crypto.topGainersTopLosers" />}
    >
      <GainerLooserTable data={data} />
    </AppCard>
  );
};

export default GainerLooser;
