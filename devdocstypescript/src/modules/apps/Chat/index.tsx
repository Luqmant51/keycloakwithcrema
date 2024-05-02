'use client';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from '@devdocs/components/AppsContainer';

import ChatContent from './ChatContent';
import ChatSideBar from './ChatSideBar';
import { ConnectionType } from '@devdocs/types/models/apps/Chat';
import ChatContextProvider from '../context/ChatContextProvider';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<ConnectionType>(
    {} as ConnectionType,
  );

  const { messages } = useIntl();
  return (
    <ChatContextProvider>
      <AppsContainer
        title={messages['chatApp.chat'].toString()}
        sidebarContent={
          <ChatSideBar
            selectedUser={selectedUser as ConnectionType}
            setSelectedUser={setSelectedUser}
          />
        }
      >
        <ChatContent
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </AppsContainer>
    </ChatContextProvider>
  );
};

export default Chat;
