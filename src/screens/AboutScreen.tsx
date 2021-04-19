/*
 *******************************************************************************
 *  Filename:   ./src/screens/AboutScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   MyApp > About This App - displays information about app
 *  Notes:
 *  
 *  Revisions:
 *      04/01/2021  File Created
 *      04/08/2021  Added Redux components.
 *******************************************************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import * as Device from 'expo-device';
import * as Application from 'expo-application';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    ABOUT_LOADED,
    ABOUT_UPDATE_VALUE,
} from '../constants/actionTypesAbout';

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
    ...state.About,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ABOUT_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: ABOUT_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'about';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class AboutScreen extends React.Component {
    constructor(props) {
        super(props);

        this.getScreen = this.getScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
    }    

    render() {
        var pageImage = images.graphics["about1"];

        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ScrollView>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-6')}>
                        <StyledText textSize="header" textAlign="left">{content["header1"]}</StyledText>
                        <StyledText textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>

                        <View style={tailwind('pge-tw-separator pge-tw-w-full pge-tw-my-4')} />

                        <StyledText textSize="sectionheader" textAlign="left">{content["header2"]}</StyledText>
                        
                        <Image style={tailwind('pge-tw-my-4')} source={pageImage} />

                        <StyledText textSize="normal" textAlign="left">{content["paragraph2"]}</StyledText>

                        <View style={tailwind('pge-tw-separator pge-tw-w-full pge-tw-my-4')} />

                        <StyledText textSize="sectionheader" textAlign="left">{content["header3"]}</StyledText>
                        <StyledText textSize="normal" textAlign="left">{content["paragraph3"]}</StyledText>

                        <View style={tailwind('pge-tw-separator pge-tw-w-full pge-tw-my-4')} />

                        <StyledText textSize="sectionheader" textAlign="left">{content["header4"]}</StyledText>
                        <StyledText textSize="normal" textAlign="left">{content["paragraph4"]}</StyledText>
                        
                        <View style={tailwind('pge-tw-separator pge-tw-w-full pge-tw-my-4')} />

                        <StyledText textSize="sectionheader" textAlign="left">Application Information</StyledText>

                        <StyledText textSize="normal" textAlign="left">
                            <StyledText textSize="sectionheader" textAlign="left">App Version: </StyledText>
                            {Application.nativeApplicationVersion}
                        </StyledText>

                        <StyledText textSize="normal" textAlign="left">
                            <StyledText textSize="sectionheader" textAlign="left">Platform Version: </StyledText>
                            {Application.nativeBuildVersion}
                        </StyledText>

                        <StyledText textSize="normal" textAlign="left">
                            <StyledText textSize="sectionheader" textAlign="left">OS Version: </StyledText>
                            {Device.osName} {Device.osVersion}
                        </StyledText>

                        <StyledText textSize="normal" textAlign="left">
                            <StyledText textSize="sectionheader" textAlign="left">Device Type: </StyledText>
                            {Device.manufacturer} {Device.modelName}
                        </StyledText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);