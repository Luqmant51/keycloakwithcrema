import React from 'react';
import { portfolioData } from '@devdocs/fakedb/extraPages';
import PortfolioDetail from './PortfolioDetail';

const PortFolioPage = () => {
  return <PortfolioDetail portfolioData={portfolioData} />;
};

export default PortFolioPage;
