/*
 *******************************************************************************
 *
 *  Filename:   ./src/screens/ReportScreen.tsx
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Screen for Home > Create Report
 *    
 *  Author:     Norman J. Nolasco [ PWC ]
 *    
 *  Created:    Saturday, April 3, 2021 - 4:33 AM (CST)
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

import * as React from 'react';
import { Text, View } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

const testvalue = data.testing;

const route = 'report';

console.log("enter:", route, ":", testvalue);

const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);
const content = utility.contentDictionary(configSettings[0].content);

export default function ReportScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectiontitle}>{content["header"]}</Text>
            <View style={styles.separator} />
            <Text style={styles.textLeft}>{content["paragraph"]}</Text>
        </View>
    );
}