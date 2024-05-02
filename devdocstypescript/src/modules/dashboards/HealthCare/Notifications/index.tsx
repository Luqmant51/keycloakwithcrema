import React from "react";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import AppList from "@devdocs/components/AppList";
import NotificationCell from "./NotificationCell";
import PropTypes from "prop-types";
import { NotificationType } from "@devdocs/types/models/dashboards/HealthCare";

type Props = {
  data: NotificationType[];
};

const Notifications = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["healthCare.notification"] as string}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  data: PropTypes.array.isRequired,
};
