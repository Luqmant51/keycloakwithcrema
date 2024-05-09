'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import AppContextProvider from '@devdocs/context/AppContextProvider';
import AppThemeProvider from '@devdocs/context/AppThemeProvider';
import AppStyleProvider from '@devdocs/context/AppStyleProvider';
import AppLocaleProvider from '@devdocs/context/AppLocaleProvider';

import AuthRoutes from '@devdocs/components/AuthRoutes';
import AppPageMeta from '@devdocs/components/AppPageMeta';
import InfoViewContextProvider from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import AppAuthProvider from '@devdocs/core/AppAuthProvider';

import '../../public/styles/vendors/index.css';

const clientSideEmotionCache = createEmotionCache();
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Be Vietnam:wght@100;200;300;400;500;600&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <script
          async
          defer
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBtgCpqXBu7Mdl2bzhhHnutAroyEteQo9s&v=3.exp&libraries=geometry,drawing,places'
        />
      </head>
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <AppContextProvider>
            <AppThemeProvider>
              <AppStyleProvider>
                <AppLocaleProvider>
                  <InfoViewContextProvider>
                    <AppAuthProvider>
                      <AuthRoutes>
                        <CssBaseline />
                        <AppPageMeta />
                        {children}
                      </AuthRoutes>
                    </AppAuthProvider>
                  </InfoViewContextProvider>
                </AppLocaleProvider>
              </AppStyleProvider>
            </AppThemeProvider>
          </AppContextProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
