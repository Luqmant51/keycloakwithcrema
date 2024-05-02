'use client';
import React from 'react';
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@devdocs/components/AppComponentCard';
import AppComponentHeader from '@devdocs/components/AppComponentHeader';
import AppGridContainer from '@devdocs/components/AppGridContainer';

const Radial = () => {
  return (
    <>
      <AppComponentHeader
        title='Radial Bar Chart'
        refUrl='http://recharts.org/en-US/api/RadialBarChart/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Simple Radial Bar Chart'
            component={SimpleRadialBarChart}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Radial;
