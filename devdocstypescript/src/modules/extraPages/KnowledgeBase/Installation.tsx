import React from "react";
import Box from "@mui/material/Box";
import IntlMessages from "@devdocs/helpers/IntlMessages";
import KBItem from "./KBItem";
import AppGridContainer from "@devdocs/components/AppGridContainer";
import { Fonts } from "@devdocs/constants/AppEnums";
import { InstallationDataType } from "@devdocs/types/models/extrapages/Portfolio";

type InstallationProps = {
  installationQueries: InstallationDataType[];
};

const Installation: React.FC<InstallationProps> = ({ installationQueries }) => {
  return (
    <Box mb={2}>
      <Box
        component="h3"
        color="text.primary"
        mb={{ xs: 4, lg: 6 }}
        fontSize={16}
        fontWeight={Fonts.BOLD}
      >
        <IntlMessages id="knowledge.installation" />
      </Box>
      <AppGridContainer>
        {installationQueries.map((data: any) => (
          <KBItem data={data} key={data.id} />
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default Installation;
