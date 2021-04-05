/*
 *******************************************************************************
 * 
 *  Filename:   ./src/screens/PrivacyScreen.tsx
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Screen for Home > My App > Privacy Policy
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
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';

import { ListItem, Icon, Divider } from 'react-native-elements';

import data from '../../contentConfig.json';
import styles from '../../Styles';
import images from '../assets/images/images';
import myAppOutline from '../../myAppConfig.json';

function getNodeByRoute(routes, route) {
    return routes.filter(
        function (routes) {
            return routes.route == route;
        }
    );
}

const configSettings = getNodeByRoute(data.routes, 'privacy');

var content = {};

for (var i = 0; i < configSettings[0].content.length; i++) {
    content[configSettings[0].content[i].name] = configSettings[0].content[i].text;
}

export default class PrivacyScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerLeft}>
                    <Text style={styles.sectiontitle}>{content["header1"]}</Text>
                    <Text style={styles.textLeft}>{content["paragraph1"]}</Text>
                    <Text style={styles.sectiontitle}>{content["header2"]}</Text>
                    <Text style={styles.textLeft}>{content["paragraph2"]}</Text>
                </View>
            </ScrollView>
        );
    }
}