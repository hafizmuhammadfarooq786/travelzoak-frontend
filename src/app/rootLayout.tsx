'use client';
import { ReduxProvider } from '@/redux/provider';
import { persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
