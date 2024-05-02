'use client';
import React from 'react';
import AppList from '@devdocs/components/AppList';
import ListItem from './ListItem';

import AppLoader from '@devdocs/components/AppLoader';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';

const Flat = () => {
  const [{ apiData: usersList, loading }] = useGetDataApi('/userList', []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          onEndReached={() => console.log('onEndReached')}
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Flat;
