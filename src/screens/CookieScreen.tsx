/*
 *******************************************************************************
 *  Filename:   ./src/screens/CookieScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   MyApp > Cookie Policy - displays cookie policy legal info
 *  Notes:
 *  
 *  Revisions:
 *      04/01/2021  File Created
 *      04/08/2021  Added Redux components.
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    COOKIES_LOADED,
    COOKIES_UPDATE_VALUE,
} from '../constants/actionTypesCookies';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.Cookies,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: COOKIES_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: COOKIES_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'cookies';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class CookieScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ScrollView>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-8')}>
                        <StyledText textSize="sectionheader" textAlign="left">{content["header1"]}</StyledText>
                        <StyledText textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>

                        <StyledText textSize="sectionheader" textAlign="left">{content["header2"]}</StyledText>

                        <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-row')}>
                            <View style={tailwind('pge-tw-w-3/5')}>
                                <StyledText textSize="sectionheader" textAlign="left">Strictly Necessary Cookies</StyledText>
                            </View>
                            <View style={tailwind('pge-tw-w-2/5')}>
                                <StyledText textSize="normal" textAlign="right">Always Active</StyledText>
                            </View>
                        </View>

                        <StyledText textSize="normal" textAlign="left">{content["paragraph2"]}</StyledText>

                        <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-row')}>
                            <View style={tailwind('pge-tw-w-1/2')}>
                                <StyledText textSize="sectionheader" textAlign="left">{content["header3"]}</StyledText>
                            </View>
                            <View style={tailwind('pge-tw-w-1/2')}>
                                <StyledText textSize="normal" textAlign="right">Cookie Toggle</StyledText>
                            </View>
                        </View>

                        <StyledText textSize="normal" textAlign="left">{content["paragraph3"]}</StyledText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieScreen);