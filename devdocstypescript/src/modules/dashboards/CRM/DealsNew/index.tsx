import React, { useState } from "react";
import DealsTable from "./DealsTable";
import { useIntl } from "react-intl";
import Box from "@mui/material/Box";
import AppCard from "@devdocs/components/AppCard";
import { Typography } from "@mui/material";
import { Fonts } from "@devdocs/constants/AppEnums";
import IntlMessages from "@devdocs/helpers/IntlMessages";
import AppSelect from "@devdocs/components/AppSelect";
import { DealsTableDaumType } from "@devdocs/types/models/dashboards/CRM";

type Props = {
  dealsTableData: DealsTableDaumType[];
};
const Deals = ({ dealsTableData = [] }: Props) => {
  const [tableData, setTableData] = useState(dealsTableData);

  const onDealChange = (value: string) => {
    if (value === messages["todo.completed"]) {
      setTableData(
        dealsTableData.filter((data) => data.progress === "Approved")
      );
    } else if (value === messages["common.pending"]) {
      setTableData(
        dealsTableData.filter((data) => data.progress === "Pending")
      );
    } else {
      setTableData(dealsTableData);
    }
  };

  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              mr: { xs: 4, lg: 5 },
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
            }}
            variant="h3"
            component="h3"
          >
            <IntlMessages id="dashboard.crm.deals" />
          </Typography>
        </Box>
      }
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={
        <AppSelect
          menus={[
            messages["common.all"],
            messages["todo.completed"],
            messages["common.pending"],
          ]}
          defaultValue={messages["common.all"]}
          onChange={onDealChange}
        />
      }
    >
      <DealsTable dealsTableData={tableData} />
    </AppCard>
  );
};

export default Deals;
