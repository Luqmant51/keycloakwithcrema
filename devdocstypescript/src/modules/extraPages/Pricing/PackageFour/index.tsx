import React from "react";
import AppGridContainer from "@devdocs/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PackageCard from "./PackageCard";
import AppCard from "@devdocs/components/AppCard";
import { PricingFourType } from "@devdocs/types/models/extrapages/Pricing";

type Props = {
  pricing: PricingFourType[];
};

const PackageFour = ({ pricing }: Props) => {
  return (
    <AppCard title="Pricing Package Style 4" sxStyle={{ alignItems: "center" }}>
      <AppGridContainer
        sx={{
          maxWidth: 1000,
          justifyContent: "center",
        }}
      >
        {pricing.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PackageCard pricing={data} />
          </Grid>
        ))}
      </AppGridContainer>
    </AppCard>
  );
};

export default PackageFour;
