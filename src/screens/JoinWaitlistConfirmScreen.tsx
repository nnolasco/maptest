/*
 *******************************************************************************
 *  Filename:   ./src/screens/JoinWaitlistConfirmScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Join Waitlist Confirm Screen
 *  Notes:
 *      
 *  Revisions:
 *      04/14/2021  File Created
 *******************************************************************************
 */

import * as React from 'react';
import { SafeAreaView, ImageBackground, TouchableOpacity, Text, View, Image } from 'react-native';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import { connect } from 'react-redux';

import {
    JOINWAITLIST_LOADED,
    JOINWAITLIST_UPDATE_VALUE,
} from '../constants/actionTypesJoinWaitlist';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';
import { StyledSlideButton } from '../components/StyledSlideButton';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.JoinWaitlist,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: JOINWAITLIST_LOADED, payload }),
    onUnload: () => 
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: JOINWAITLIST_UPDATE_VALUE, key, value }),
    onStateToConsole: () => 
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'joinwaitlistconfirm';
const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);
const content = utility.contentDictionary(configSettings[0].content);

export class JoinWaitlistConfirmScreen extends React.Component {
    constructor(props) {
        super(props);

        this.goHome = this.goHome.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    goHome() {
        const { navigate } = this.props.navigation;
        navigate("RootNavigator");
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ImageBackground source={images.graphics["onboardbg"]} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-col pge-tw-content-between pge-tw-m-6 pge-tw-p-6 pge-tw-rounded-xl pge-tw-bg-white')}>
                        <View style={tailwind('pge-tw-flex-container-4 pge-tw-mt-8')}>
                            <StyledText textSize="header" textAlign="left">{content["header1"]}</StyledText>
                            <StyledText textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>
                        </View>
                        <View style={tailwind('pge-tw-flex-container-1 pge-tw-mt-8')}>
                            <StyledButton appearance="primary" size="full-width" label={buttons["submit"]} onPress={this.goHome} />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinWaitlistConfirmScreen);