/*
 *******************************************************************************
 * 
 *  Filename:   ./src/navigation/LinkingConfiguration.ts
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Definitions for url links within app.
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Friday, April 2, 2021 - 9:12 PM (CST)
 *  
 *  Notes:
 *
 *      
 *  Revisions:
 *      04/02/2021  NJN     File Created
 *      
 *      
 *  Copyright (c) 2021 - PricewaterhouseCoopers - All Rights Reserved.
 *  Unauthorized copying of this file via any medium is strictly prohibited.
 *  Proprietary and Confidential.
 *
 *******************************************************************************
 */

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
