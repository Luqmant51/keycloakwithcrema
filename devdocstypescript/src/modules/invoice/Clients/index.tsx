'use client';
import AppGrid from '@devdocs/components/AppGrid';
import AppLoader from '@devdocs/components/AppLoader';
import { isEmptyObject } from '@devdocs/helpers/ApiHelper';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import ClientItem from './ClientItem';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ClientType } from '@devdocs/types/models/invoice';

const Clients = () => {
  const router = useRouter();
  const [{ apiData: clientsList, loading }] = useGetDataApi<ClientType[]>(
    '/invoice/clients',
    [],
    {},
    true,
  );
  return !isEmptyObject(clientsList) ? (
    <Box>
      <Box>
        <Button
          color='primary'
          variant='contained'
          sx={{ display: 'block', ml: 'auto', mb: 3 }}
          onClick={() => router.push('/invoice/clients/add')}
        >
          Add Clients
        </Button>
      </Box>
      <AppGrid
        responsive={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        loading={loading}
        data={clientsList}
        renderRow={(client) => <ClientItem client={client} />}
      />
    </Box>
  ) : (
    <AppLoader />
  );
};

export default Clients;
