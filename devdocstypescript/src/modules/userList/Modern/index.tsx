'use client';
import React from 'react';
import AppList from '@devdocs/components/AppList';

import AppLoader from '@devdocs/components/AppLoader';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import ListItem from './ListItem';
import { UserListProps } from '@devdocs/types/models/Apps';

const Modern = () => {
  const [{ apiData: usersList, loading }] =
    useGetDataApi<UserListProps[]>('/userList');
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Modern;
