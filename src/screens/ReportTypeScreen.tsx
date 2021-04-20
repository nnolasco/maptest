/*
 *******************************************************************************
 *  Filename:   ./src/screens/ReportTypeScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Report Type
 *  Notes:
 *  
 *  Revisions:
 *      04/16/2021  File Created
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    REPORTTYPE_LOADED,
    REPORTTYPE_UPDATE_VALUE,
} from '../constants/actionTypesReportType';

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
    ...state.ReportType,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: REPORTTYPE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: REPORTTYPE_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

export class ReportTypeScreen extends React.Component {
    constructor() {
        super();

//        console.log(reportTypes);
        this.getScreen = this.getScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
        this.selectReportType = this.selectReportType.bind(this);
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

    selectReportType(option) {
        this.props.onUpdateValue('reporttype', option);
        this.handleStateToConsole()
        this.getScreen("DamageTypeScreen");
    }

    render() {
        const route = 'reporttype';
        const configSettings = utility.getNodeByRoute(data.routes, route);
        const reportTypes = configSettings[0].reporttypes;
        
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ScrollView>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-8')}>
                        <StyledText textSize="header2" textAlign="left">What would you like to report at [address]?</StyledText>
                        <StyledText textSize="normal" textAlign="left">Select one:</StyledText>
                        {
                            reportTypes.map((item, i) => {
                                return (
                                    <View key={i}>
                                        <StyledButton appearance="report" size="full-width" icon={item.icon} label={item.name} onPress={() => this.selectReportType(item.value)} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportTypeScreen);