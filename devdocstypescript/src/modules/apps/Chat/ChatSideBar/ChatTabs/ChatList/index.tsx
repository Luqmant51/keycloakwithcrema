import React from "react";
import ChatItem from "./ChatItem";
import AppList from "@devdocs/components/AppList";
import ListEmptyResult from "@devdocs/components/AppList/ListEmptyResult";
import { useIntl } from "react-intl";
import ChatListSkeleton from "@devdocs/components/AppSkeleton/ChatListSkeleton";
import { ConnectionType } from "@devdocs/types/models/apps/Chat";

type ChatListProps = {
  chatListData: ConnectionType[];
  loading: boolean;
  selectedUser: ConnectionType;
  setSelectedUser: (user: ConnectionType) => void;
};

const ChatList: React.FC<ChatListProps> = ({
  chatListData,
  loading,
  setSelectedUser,
  selectedUser,
}) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: "flex",
        flexDirection: "column",
      }}
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages["chatApp.noUserFound"] as string}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ChatItem
          key={"chat-item-" + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ChatList;
