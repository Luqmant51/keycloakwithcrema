'use client';
import React from 'react';
import { Box } from '@mui/material';
import AppAnimate from '@devdocs/components/AppAnimate';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import OrderPlaced from './OrderPlaced';
import AddressInfo from './AddressInfo';
import ItemsList from './ItemsList';
import { addresses } from '@devdocs/fakedb/ecommerce/ecommerceData';
import AppLoader from '@devdocs/components/AppLoader';
import { CartItemsType } from '@devdocs/types/models/ecommerce/EcommerceApp';

const Confirmation = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi<CartItemsType[]>(
    'ecommerce/cart',
    [],
  );
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <Box>
            <OrderPlaced cartItems={cartItems} />
            <AddressInfo address={addresses[0]} />
            <ItemsList cartItems={cartItems} />
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Confirmation;
