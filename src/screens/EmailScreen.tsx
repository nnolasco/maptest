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

import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

const EmailScreen = (props) => {
    const route = 'signin';
    const configSettings = utility.getNodeByRoute(data.routes, route);
    const buttons = utility.buttonDictionary(configSettings[0].buttons);
    const content = utility.contentDictionary(configSettings[0].content);

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    isEmailValid = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(email).toLowerCase());
    }

    handleSubmit = () => {
        const { navigate } = props.navigation;

        console.log('email submit:', email);

        if (isEmailValid()) {
            navigate('RootNavigator');
        } else {
            setError('invalid email format');
        }
    }

    return (
        <View style={styles.containerLeft}>
            <Text style={styles.sectiontitle}>{content["header"]}</Text>
            <Text style={styles.textLeft}>{content["paragraph1"]}</Text>
            <Text style={styles.textLeft}>{content["paragraph2"]}</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => { setError(''); setEmail(email); }}
                placeholder="Email Address"
                value={email}
                defaultValue={email}
            />
            <View style={{ paddingLeft: 40, height: 30}}>
                <Text style={styles.inputLabel, {color: '#990000'}}>{error}</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit} >
                <Text style={styles.buttonTextStyle} >{buttons["submit"]}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default EmailScreen;