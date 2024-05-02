'use client';
import React from 'react';
import { useInfoViewActionsContext } from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import AddClient from './AddClient';
import { putDataApi, useGetDataApi } from '@devdocs/hooks/APIHooks';
import { isEmptyObject } from '@devdocs/helpers/ApiHelper';
import { useParams, useRouter } from 'next/navigation';
import { ClientType } from '@devdocs/types/models/invoice';

const EditClients = () => {
  const router = useRouter();
  const params = useParams();
  const { all } = params;
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: selectedClient }] = useGetDataApi<ClientType>(
    'invoice/clients/detail',
    {} as ClientType,
    { id: all[0] },
    true,
  );

  const onSave = (client: ClientType) => {
    putDataApi('/invoice/clients', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'Client has been updated successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    router.push('/invoice/clients');
  };

  return (
    !isEmptyObject(selectedClient) && (
      <AddClient selectedClient={selectedClient} onSave={onSave} />
    )
  );
};

export default EditClients;