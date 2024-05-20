import React, { ReactNode, useEffect, useState } from 'react';
import AppContentView from '../../AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import DefaultLayoutWrapper from './DefaultLayoutWrapper';
import MainContent from './MainContent';
import DefaultLayoutContainer from './DefaultLayoutContainer';
import { usePathname } from 'next/navigation';
import { RouterConfigData } from '@devdocs/types/models/Apps';
import PrimaryAppBar from './AppHeaderCustom';

type Props = {
  children: ReactNode;
  routesConfig?: RouterConfigData[];
};

const DefaultLayout: React.FC<Props> = ({ children, routesConfig }) => {
  const pathname = usePathname();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    setNavCollapsed(false);
  }, [pathname]);
  return (
    <DefaultLayoutContainer>
      <DefaultLayoutWrapper>
        <MainContent>
          <PrimaryAppBar />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </MainContent>
        {/* <AppThemeSetting /> */}
      </DefaultLayoutWrapper>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
