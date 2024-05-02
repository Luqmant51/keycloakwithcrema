import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AppList from "@devdocs/components/AppList";
import AppCard from "@devdocs/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@devdocs/components/AppScrollbar";
import MessageItem from "@devdocs/components/AppMessages/MessageItem";
import { MessagesType } from "@devdocs/types/models/dashboards/Widgets";

type MessagesProps = {
  data: MessagesType[];
};

const Messages: React.FC<MessagesProps> = ({ data }) => {
  const messageData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.messages"] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={messageData}
          renderRow={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Messages;
