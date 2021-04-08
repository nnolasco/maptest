/*
 *******************************************************************************
 *  Filename:   ./src/screens/EmailScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Email Sign-In Screen
 *  Notes:
 *      04/01/2021  NJN     Currently does no validation check on email.
 *  Revisions:
 *      04/01/2021  NJN     File Created
 *******************************************************************************
 */

import React from 'react';
import { TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

import { connect } from 'react-redux';

import {
    ONBOARDING_LOADED,
    ONBOARDING_UPDATE_VALUE,
} from '../constants/actionTypesOnboarding';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

const mapStateToProps = state => ({
    ...state.Onboarding,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ONBOARDING_LOADED, payload }),
    onUnload: () => 
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: ONBOARDING_UPDATE_VALUE, key, value }),
    onStateToConsole: () => 
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'email';
const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);
const content = utility.contentDictionary(configSettings[0].content);

export class EmailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.isEmailValid = this.isEmailValid.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    isEmailValid = () => {
        /* This pattern is essentially "alphanumeric@alphanumeric.alphanumeric" */
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(this.props.email).toLowerCase());
    }

    handleChangeText(value) {
        this.props.onUpdateValue('email', value);
        this.props.onUpdateValue('error', '');
    }

    handleSubmit() {
        const { navigate } = this.props.navigation;
        if (this.isEmailValid()) {
            this.props.onUpdateValue('error', '');
            navigate('RootNavigator');
        } else {
            this.props.onUpdateValue('error', 'bad email format');
        }
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
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
                    onChangeText={this.handleChangeText}
                    placeholder="Email Address"
                    defaultValue={this.props.email}
                />
                <View style={{ paddingLeft: 40, height: 30 }}>
                    <Text style={styles.inputLabel, {color: '#990000'}}>{this.props.error}</Text>
                </View>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleSubmit} >
                    <Text style={styles.buttonTextStyle} >{buttons["submit"]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleStateToConsole} >
                    <Text style={styles.buttonTextStyle} >Test Redux State</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailScreen);