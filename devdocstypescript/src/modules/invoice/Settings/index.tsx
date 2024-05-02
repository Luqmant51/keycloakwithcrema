'use client';
import React from 'react';
import InvoiceSettings from './Settings';
import { putDataApi, useGetDataApi } from '@devdocs/hooks/APIHooks';
import { useInfoViewActionsContext } from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import {
  InvoiceSettingType,
  InvoiceSettingItem,
} from '@devdocs/types/models/invoice';

const InvoiceSettingsPage = () => {
  const [{ apiData }, { reCallAPI }] = useGetDataApi<InvoiceSettingType>(
    'invoice/settings',
    {} as InvoiceSettingType,
    {},
    true,
  );
  const infoViewActionsContext = useInfoViewActionsContext();

  const onUpdateSettings = (key: string, newSettings: InvoiceSettingItem) => {
    const settings = {
      ...apiData,
      [key]: newSettings,
    };
    putDataApi('invoice/settings', infoViewActionsContext, settings)
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage('Settings Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <InvoiceSettings
      defaultSettings={apiData}
      onUpdateSettings={onUpdateSettings}
    />
  );
};

export default InvoiceSettingsPage;
