'use client';

import React from 'react';
import appStore from '@/redux/store/store';
import { Provider as ReduxProvider } from 'react-redux';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={appStore}>{children}</ReduxProvider>;
};

export default Provider;
