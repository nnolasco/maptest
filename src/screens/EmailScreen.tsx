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
import { SafeAreaView, ImageBackground, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledInput } from '../components/StyledInput';
import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';

import { connect } from 'react-redux';

import {
    EMAIL_LOADED,
    EMAIL_UPDATE_VALUE,
} from '../constants/actionTypesEmail';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.Email,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: EMAIL_LOADED, payload }),
    onUnload: () => 
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: EMAIL_UPDATE_VALUE, key, value }),
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

        this.isEmailValidFormat = this.isEmailValidFormat.bind(this);
        this.isEmailOnList = this.isEmailOnList.bind(this);
        this.handleChangeEmailText = this.handleChangeEmailText.bind(this);
        this.handleChangeUserTypeText = this.handleChangeUserTypeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    isEmailValidFormat(email){
        /* This pattern is essentially "alphanumeric@alphanumeric.alphanumeric" */
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(email).toLowerCase());
    }

    isEmailOnList(email) {
        return email.toLowerCase() === "test@test.com" ? true : false;
    }

    handleChangeEmailText(value) {
        this.props.onUpdateValue('email', value);
        this.props.onUpdateValue('error', '');
    }

    handleChangeUserTypeText(value) {
        this.props.onUpdateValue('usertype', value);
    }

    handleSubmit() {
        const { navigate } = this.props.navigation;
        const email = this.props.email || '';
        var emailValid = false;

        if (this.isEmailValidFormat(email)) {
            emailValid = true;
        } else {
            emailValid = false;
            this.props.onUpdateValue('error', 'Valid email required');
        }

        if (emailValid) {
            if (this.isEmailOnList(email)) {
                navigate('RootNavigator');
            } else {
                navigate('JoinWaitlistScreen');
            }
        }
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {

        const error = this.props.error || null;
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ImageBackground source={images.graphics["onboardbg"]} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-m-6 pge-tw-p-6 pge-tw-rounded-xl pge-tw-bg-white')}>
                        <StyledText flex="1" textSize="header" textAlign="left">{content["header"]}</StyledText>
                        <StyledText flex="2" textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>

                        <View style={tailwind('pge-tw-mt-6')}>
                            <StyledInput label="Email Address" placeholder="Email Address" defaultValue={this.props.email} 
                            onChangeText={this.handleChangeEmailText} required="True" error={error} />
                            
                            <StyledInput label="What best describes you?" placeholder="Select One" defaultValue={this.props.usertype} 
                            onChangeText={this.handleChangeUserTypeText} required="True" />

                            <StyledText flex="1" textSize="normal" textAlign="left"><Text style={tailwind('pge-tw-text-red')}>*</Text> Required Field</StyledText>
                        </View>
                        <View style={tailwind('pge-tw-mt-8')}>
                            <StyledButton appearance="primary" size="full-width" label={buttons["submit"]} onPress={this.handleSubmit} />
{/*}
                            <StyledButton appearance="primary" size="full-width" label={"Test Redux"} onPress={this.handleStateToConsole} />
*/}
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailScreen);