'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthUserKeyCloack } from '../../@devdocs/hooks/AuthHooks';
import AppLoader from '@devdocs/components/AppLoader';
import routesConfig from '@devdocs/core/AppRoutes/routeConfig';
import { Layouts } from '@devdocs/components/AppLayout';
import { useSidebarActionsContext } from '@devdocs/context/AppContextProvider/SidebarContextProvider';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '@devdocs/context/AppContextProvider/LayoutContextProvider';

export default function RootLayout({ children }: any) {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const searchParams = useSearchParams();

  const { user, isLoading } = useAuthUserKeyCloack();
  const router = useRouter();
  const layout = searchParams.get('layout');
  const menuStyle = searchParams.get('menuStyle');
  const sidebarImage = searchParams.get('sidebarImage');
  const queryParams = searchParams.toString();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/signin' + (queryParams ? '?' + queryParams : ''));
    }
  }, [user, isLoading, queryParams]);

  useEffect(() => {
    if (layout) updateNavStyle(layout);
    if (menuStyle) updateMenuStyle(menuStyle);
    if (sidebarImage) setSidebarBgImage(true);
  }, []);

  if (!user || isLoading) return <AppLoader />;

  return <AppLayout routesConfig={routesConfig}>{children}</AppLayout>;
}
