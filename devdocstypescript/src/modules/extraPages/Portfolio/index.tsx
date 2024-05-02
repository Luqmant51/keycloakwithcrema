'use client';
import React from 'react';
import { portfolioData } from '@devdocs/fakedb/extraPages';
import PortfolioTabs from './PortfolioTabs';
const PortFolioPage = () => {
  return <PortfolioTabs portfolio={portfolioData.portfolio} />;
};

export default PortFolioPage;
