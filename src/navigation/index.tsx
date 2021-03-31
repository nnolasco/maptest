import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import IntroScreen from '../screens/IntroScreen';
import EmailScreen from '../screens/EmailScreen';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName="IntroScreen">
              <Stack.Screen
                  name="IntroScreen"
                  component={IntroScreen}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="EmailScreen"
                  component={EmailScreen}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="RootNavigator"
                  component={RootNavigator}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="NotFoundScreen"
                  component={NotFoundScreen}
                  options={{ headerShown: true }}
              />
          </Stack.Navigator>
    </NavigationContainer>
  );
}


