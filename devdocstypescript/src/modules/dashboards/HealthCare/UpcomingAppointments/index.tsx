import React from "react";
import { useIntl } from "react-intl";
import AppCard from "@devdocs/components/AppCard";
import AppList from "@devdocs/components/AppList";
import AppointmentCell from "./AppointmentCell";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import PropTypes from "prop-types";
import type { UpcomingAppointmentType } from "@devdocs/types/models/dashboards/HealthCare";

type Props = {
  data: UpcomingAppointmentType[];
};

const UpcomingAppointments = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["healthCare.upcomingAppointments"] as string}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.propTypes = {
  data: PropTypes.array.isRequired,
};
