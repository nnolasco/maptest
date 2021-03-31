import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import MyAppScreen from '../screens/MyAppScreen';
import AboutScreen from '../screens/AboutScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyReportsScreen from '../screens/MyReportsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import TermsScreen from '../screens/TermsScreen';
import CookieScreen from '../screens/CookieScreen';
import HelpScreen from '../screens/HelpScreen';

import { BottomTabParamList, HomeParamList, ReportParamList, MyAppParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Map Test"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={ReportNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-add-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyApp"
        component={MyAppNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'PG&E Map Test' }}
      />
    </HomeStack.Navigator>
  );
}

const ReportStack = createStackNavigator<ReportParamList>();

function ReportNavigator() {
  return (
    <ReportStack.Navigator>
          <ReportStack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{ headerTitle: 'Report' }}
      />
    </ReportStack.Navigator>
  );
}

const MyAppStack = createStackNavigator<MyAppParamList>();

function MyAppNavigator() {
    return (
        <MyAppStack.Navigator>
            <MyAppStack.Screen
                name="MyAppScreen"
                component={MyAppScreen}
                options={{ headerTitle: 'My App' }}
            />
            <MyAppStack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{ headerTitle: 'About This Screen' }}
            />
            <MyAppStack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{ headerTitle: 'Notifications' }}
            />
            <MyAppStack.Screen
                name="MyReportsScreen"
                component={MyReportsScreen}
                options={{ headerTitle: 'My Reports' }}
            />
            <MyAppStack.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{ headerTitle: 'Privacy Policy' }}
            />
            <MyAppStack.Screen
                name="TermsScreen"
                component={TermsScreen}
                options={{ headerTitle: 'Terms of Use' }}
            />
            <MyAppStack.Screen
                name="CookieScreen"
                component={CookieScreen}
                options={{ headerTitle: 'Cookie Policy' }}
            />
            <MyAppStack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{ headerTitle: 'Help Center' }}
            />
        </MyAppStack.Navigator>
    );
}
