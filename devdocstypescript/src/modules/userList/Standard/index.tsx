'use client';
import React from 'react';
import AppList from '@devdocs/components/AppList';
import ListItem from './ListItem';
import AppLoader from '@devdocs/components/AppLoader';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import { UserListProps } from '@devdocs/types/models/Apps';

const Standard = () => {
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

export default Standard;
