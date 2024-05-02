'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthUser } from '@devdocs/hooks/AuthHooks';
import { initialUrl } from '@devdocs/constants/AppConst';
import AppLoader from '@devdocs/components/AppLoader';
import { useLayoutActionsContext } from '@devdocs/context/AppContextProvider/LayoutContextProvider';
import { useSidebarActionsContext } from '@devdocs/context/AppContextProvider/SidebarContextProvider';
import AuthLayout from './AuthLayout';

export default function RootLayout({ children }: any) {
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const searchParams = useSearchParams();
  const { user, isLoading } = useAuthUser();
  const layout = searchParams.get('layout');
  const menuStyle = searchParams.get('menuStyle');
  const sidebarImage = searchParams.get('sidebarImage');
  const queryParams = searchParams.toString();
  const router = useRouter();

  useEffect(() => {
    if (layout) updateNavStyle(layout);
    if (menuStyle) updateMenuStyle(menuStyle);
    if (sidebarImage) setSidebarBgImage(true);
  }, [layout, menuStyle, sidebarImage, updateMenuStyle, updateNavStyle]);

  useEffect(() => {
    if (user) {
      router.push(initialUrl + (queryParams ? '?' + queryParams : ''));
    }
  }, [queryParams, user]);

  if (isLoading || user) return <AppLoader />;

  return <AuthLayout>{children}</AuthLayout>;
}
