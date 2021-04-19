import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Report: {
            screens: {
              ReportScreen: 'report',
            },
          },
          MyApp: {
            screens: {
              MyAppScreen: 'myapp',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
