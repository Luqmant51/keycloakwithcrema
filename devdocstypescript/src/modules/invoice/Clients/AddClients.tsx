'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useInfoViewActionsContext } from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import AddClient from './AddClient';
import { postDataApi } from '@devdocs/hooks/APIHooks';
import { ClientType } from '@devdocs/types/models/invoice';

const AddClients = () => {
  const router = useRouter();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onSave = (client: ClientType) => {
    postDataApi('/invoice/clients', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'New Client has been created successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    router.push('/invoice/clients');
  };

  return <AddClient onSave={onSave} />;
};

export default AddClients;
