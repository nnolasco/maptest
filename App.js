/*
 *******************************************************************************
 *  Filename:   ./App.js
 *  Synopsis:   Application entry point. Contains all app screens inside
 *              <SafeAreaProvider>
 *  Notes:
 *      
 *  Revisions:
 *      04/03/2021  NJN     File Created
 *******************************************************************************
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import data from './contentConfig.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer';

const store = createStore(reducer);

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const testvalue = data.testing;
    console.log(testvalue); // console testing

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </SafeAreaProvider>
            </Provider>
        );
    }
}