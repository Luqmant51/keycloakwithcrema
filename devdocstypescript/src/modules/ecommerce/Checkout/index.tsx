'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import AppCard from '@devdocs/components/AppCard';
import IntlMessages from '@devdocs/helpers/IntlMessages';
import { Fonts } from '@devdocs/constants/AppEnums';

import AppAnimate from '@devdocs/components/AppAnimate';
import AppGridContainer from '@devdocs/components/AppGridContainer';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import DeliveryAddress from './DeliveryAddress';
import PaymentInfo from './PaymentInfo';
import OrderSummary from '../OrderSummary';
import AppLoader from '@devdocs/components/AppLoader';
import { CartItemsType } from '@devdocs/types/models/ecommerce/EcommerceApp';

const Checkout = () => {
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
            <Box
              sx={{
                component: 'h2',
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id='sidebar.ecommerce.checkout' />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  title={
                    <Box sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>
                      Delivery Address
                    </Box>
                  }
                >
                  <DeliveryAddress />
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={cartItems} />
                <PaymentInfo />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Checkout;
