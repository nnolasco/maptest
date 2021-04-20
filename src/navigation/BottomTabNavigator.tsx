import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import ReportTypeScreen from '../screens/ReportTypeScreen';
import DamageTypeScreen from '../screens/DamageTypeScreen';
import HowItWorksScreen from '../screens/HowItWorksScreen';
import MyAppScreen from '../screens/MyAppScreen';
import AboutScreen from '../screens/AboutScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyReportsScreen from '../screens/MyReportsScreen';
import CookieScreen from '../screens/CookieScreen';
import HelpScreen from '../screens/HelpScreen';

import ImageLoadTestScreen from '../screens/ImageLoadTestScreen';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

import { BottomTabParamList, HomeParamList, ReportParamList, MyAppParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="HOME"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" type="material" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="REPORT"
        component={ReportNavigator}
        options={{
          tabBarIcon: ({ color }) => (
          <View style={tailwind('pge-tw-rounded-full pge-tw-w-20 pge-tw-h-20 pge-tw-bg-yellow-900 pge-tw-p-6')}>
            <TabBarIcon name="plus" type="material-community" color={color} />
          </View>),
        }}
      />
      <BottomTab.Screen
        name="MORE"
        component={MyAppNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="more-horizontal" type="feather" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon {...props} />;
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
        options={{ headerTitle: 'Report A Safety Concert' }}
      />
      <ReportStack.Screen
        name="HowItWorksScreen"
        component={HowItWorksScreen}
        options={{ headerTitle: 'Report A Safety Concert' }}
      />
      <ReportStack.Screen
        name="ReportTypeScreen"
        component={ReportTypeScreen}
        options={{ headerTitle: 'Report A Safety Concert' }}
      />
      <ReportStack.Screen
        name="DamageTypeScreen"
        component={DamageTypeScreen}
        options={{ headerTitle: 'Damage Type' }}
      />
      <ReportStack.Screen
        name="ImageLoadTestScreen"
        component={ImageLoadTestScreen}
        options={{ headerTitle: 'Image Load Test'}}
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
