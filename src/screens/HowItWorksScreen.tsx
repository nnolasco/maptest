/*
 *******************************************************************************
 *  Filename:   ./src/screens/HowItWorksScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   How It Works Screens
 *  Notes:
 *      
 *  Revisions:
 *      04/14/2021  File Created
 *******************************************************************************
 */

import * as React from 'react';
import { SafeAreaView, ImageBackground, Image, TouchableOpacity, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

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

const route = 'howitworks';
const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);
const content = utility.contentDictionary(configSettings[0].content);

export class HowItWorksScreen extends React.Component {
    constructor(props) {
        super(props);

        this.goReportScreen = this.goReportScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    goReportScreen() {
        const { navigate } = this.props.navigation;
        navigate("ReportScreen");
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
                            <View style={tailwind('pge-tw-flex-container-1')}>
                                <StyledText textSize="header" textAlign="left">{content["header"]}</StyledText>
                            </View>

                            <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-row pge-tw-mb-2')}>
                                <View style={tailwind('pge-tw-w-2/5 pge-tw-px-1')}>
                                    <Image source={images.icons["hiw1"]} style={{width: 100, height: 100}} />
                                </View>
                                <View style={tailwind('pge-tw-w-3/5 pge-tw-px-1')}>
                                    <StyledText textSize="sectionheader" textAlign="left">{content["header1"]}</StyledText>
                                    <StyledText textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>
                                </View>
                            </View>
                            
                            <Divider style={tailwind('pge-tw-mt-8 pge-tw-mb-8')} />

                            <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-row pge-tw-mb-2')}>
                                <View style={tailwind('pge-tw-w-2/5 pge-tw-px-1')}>
                                    <Image source={images.icons["hiw2"]} style={{width: 100, height: 100}} />
                                </View>
                                <View style={tailwind('pge-tw-w-3/5 pge-tw-px-1')}>
                                    <StyledText textSize="sectionheader" textAlign="left">{content["header2"]}</StyledText>
                                    <StyledText textSize="normal" textAlign="left">{content["paragraph2"]}</StyledText>
                                </View>
                            </View>

                            <Divider style={tailwind('pge-tw-mt-8 pge-tw-mb-8')} />

                            <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-row pge-tw-mb-10')}>
                                <View style={tailwind('pge-tw-w-2/5 pge-tw-px-1')}>
                                    <Image source={images.icons["hiw3"]} style={{width: 100, height: 100}} />
                                </View>
                                <View style={tailwind('pge-tw-w-3/5 pge-tw-px-1')}>
                                    <StyledText textSize="sectionheader" textAlign="left">{content["header3"]}</StyledText>
                                    <StyledText textSize="normal" textAlign="left">{content["paragraph3"]}</StyledText>
                                </View>
                            </View>
                        </View>
                        <View style={tailwind('pge-tw-flex-container-1 pge-tw-mt-8')}>
                            <StyledButton appearance="primary" size="full-width" label={buttons["submit"]} onPress={this.goReportScreen} />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorksScreen);