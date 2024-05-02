import React from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationItem from "@devdocs/components/AppNotifications/NotificationItem";
import AppList from "@devdocs/components/AppList";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import { RecentActivityType } from "@devdocs/types/models/dashboards/Widgets";

type RecentActivityProps = {
  data: RecentActivityType[];
};

const RecentActivity: React.FC<RecentActivityProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.recentActivity"] as string}
      contentStyle={{ px: 0 }}
      action={
        <Box
          component="span"
          sx={{
            ml: "auto",
            mt: 1.5,
          }}
        >
          <CloseIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
      }
    >
      <AppScrollbar
        sx={{
          height: { xs: 296, xl: 346 },
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return <NotificationItem item={item} key={item.id} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivity;
