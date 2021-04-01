/*
 *******************************************************************************
 * 
 *  Filename:   ./src/screens/ReportScreen.tsx
 *
 *  Syntax:     NA
 *
 *  Synopsis:   First step of screen for reporting new Safety Issue.
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Thursday, April 1, 2021 - 12:42 AM (CST)
 *  
 *  Notes:
 *      04/01/2021  NJN     Placeholder text pulled from contentConfig.json.
 *      
 *      
 *  Revisions:
 *      04/01/2021  NJN     File Created
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