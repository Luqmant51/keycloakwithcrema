import React from 'react';
import PortfolioDetail from '../../../../../modules/extraPages/Portfolio/PortfolioDetail';
import { portfolioData } from '@devdocs/fakedb/extraPages';

const Page = () => {
  return <PortfolioDetail portfolioData={portfolioData} />;
};

export default Page;
