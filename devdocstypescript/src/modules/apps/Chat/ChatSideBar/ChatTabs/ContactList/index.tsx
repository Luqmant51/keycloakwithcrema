import React from "react";
import ContactItem from "./ContactItem";
import AppList from "@devdocs/components/AppList";
import ListEmptyResult from "@devdocs/components/AppList/ListEmptyResult";
import ChatListSkeleton from "@devdocs/components/AppSkeleton/ChatListSkeleton";
import { useIntl } from "react-intl";
import { ConnectionType } from "@devdocs/types/models/apps/Chat";

type ConnectionListProps = {
  connectionListData: ConnectionType[];
  loading: boolean;
  selectedUser: ConnectionType;
  setSelectedUser: (user: ConnectionType) => void;
};

const ContactList = ({
  connectionListData,
  loading,
  setSelectedUser,
  selectedUser,
}: ConnectionListProps) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: "flex",
        flexDirection: "column",
      }}
      data={connectionListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages["chatApp.noUserFound"] as string}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ContactItem
          key={"connection-item-" + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ContactList;
