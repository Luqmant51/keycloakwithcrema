import React from "react";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import CustomerItem from "./CustomerItem";
import AppList from "@devdocs/components/AppList";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import PropTypes from "prop-types";
import { NewCustomersType } from "@devdocs/types/models/dashboards/Ecommerce";

type Props = {
  newCustomers: NewCustomersType[];
};

const NewCustomers = (props: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["eCommerce.newCustomers"] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar sx={{ maxHeight: 300 }}>
        <AppList
          data={props.newCustomers}
          renderRow={(item) => <CustomerItem key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;

NewCustomers.propTypes = {
  newCustomers: PropTypes.array,
};
