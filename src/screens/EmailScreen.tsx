/*
 *******************************************************************************
 * 
 *  Filename:   ./src/screens/EmailScreen.tsx
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Email Sign-In Screen
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Thursday, April 1, 2021 - 12:42 AM (CST)
 *  
 *  Notes:
 *      04/01/2021  NJN     Currently does no validation check on email.
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
import { TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

const testvalue = data.testing;

const route = 'signin';

console.log("enter:", route, ":", testvalue);

const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);
const content = utility.contentDictionary(configSettings[0].content);

export default class EmailScreen extends React.Component {
    constructor() {
        super();

        this._onDone = this._onDone.bind(this);
    }

    _onDone = () => {
        const { navigate } = this.props.navigation;

        console.log('home');
        navigate('RootNavigator');
    }

    render() {
        return (
            <View style={styles.containerLeft}>
                <Text style={styles.sectiontitle}>{content["header"]}</Text>
                <Text style={styles.textLeft}>{content["paragraph1"]}</Text>
                <Text style={styles.textLeft}>{content["paragraph2"]}</Text>

                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={this._onDone} >
                    <Text style={styles.buttonTextStyle} >{buttons["submit"]}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

