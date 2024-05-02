'use client';
import React from 'react';
import SimpleFunnel from './Components/SimpleFunnel';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@devdocs/components/AppComponentCard';
import AppComponentHeader from '@devdocs/components/AppComponentHeader';
import AppGridContainer from '@devdocs/components/AppGridContainer';

const FunnelChart = () => {
  return (
    <>
      <AppComponentHeader
        title='Funnel Chart'
        refUrl='http://recharts.org/en-US/api/FunnelChart/'
      />

      <AppGridContainer>
        <Grid item xs={12} lg={12}>
          <AppComponentCard
            title='Simple FunnelChart'
            component={SimpleFunnel}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FunnelChart;
