import React from "react";
import TicketSupportTable from "./TicketSupportTable";
import AppCard from "@devdocs/components/AppCard";
import { TicketSupportDaumType } from "@devdocs/types/models/dashboards/CRM";
import IntlMessages from "@devdocs/helpers/IntlMessages";
import { useIntl } from "react-intl";

type Props = {
  ticketSupportData: TicketSupportDaumType[];
};
const TicketSupport = ({ ticketSupportData = [] }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages["dashboard.latestTicketSupport"] as string}
      action={messages["common.viewAll"] as string}
    >
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;
