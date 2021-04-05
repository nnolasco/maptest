/*
 *******************************************************************************
 * 
 *  Filename:   ./App.js
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Application entry point. Contains all app screens inside
 *              <SafeAreaProvider>
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Saturday, April 3, 2021 - 2:14 PM (CST)
 *  
 *  Notes:
 *      
 *      
 *  Revisions:
 *      04/03/2021  NJN     File Created
 *      
 *      
 *  Copyright (c) 2021 - PricewaterhouseCoopers - All Rights Reserved.
 *  Unauthorized copying of this file via any medium is strictly prohibited.
 *  Proprietary and Confidential.
 *
 *******************************************************************************
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import data from './contentConfig.json';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const testvalue = data.testing;
  console.log(testvalue); // console testing

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
