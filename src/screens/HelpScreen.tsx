/*
 *******************************************************************************
 *  Filename:   ./src/screens/HelpScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   MyApp > Help Center - screen that shows how to get help
 *  Notes:
 *  
 *  Revisions:
 *      04/01/2021  File Created
 *      04/08/2021  Added Redux components.
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    HELP_LOADED,
    HELP_UPDATE_VALUE,
} from '../constants/actionTypesHelp';

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
    ...state.Help,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: HELP_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: HELP_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'help';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class HelpScreen extends React.Component {
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
                        <StyledText textSize="normal" textAlign="left">{content["paragraph2"]}</StyledText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen);