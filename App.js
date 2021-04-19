/*
 *******************************************************************************
 *  Filename:   ./App.js
 *  Synopsis:   Application entry point. Contains all app screens inside
 *              <SafeAreaProvider>
 *  Notes:
 *      
 *  Revisions:
 *      04/03/2021  File Created
 *      04/13/2021  Take out React Hooks for auto color scheme.
 *******************************************************************************
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import data from './contentConfig.json';
//import { tailwind } from './src/utils/tailwind';
import tailwind from 'tailwind-rn';

//Dev Note: for test only this cant go to prod
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer';

const store = createStore(reducer);

export default function App() {
  const isLoadingComplete = useCachedResources();

  const testvalue = data.testing;
  console.log(testvalue); // console testing

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
