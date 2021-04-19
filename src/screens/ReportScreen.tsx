/*
 *******************************************************************************
 *  Filename:   ./src/screens/ReportScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   First step of screen for reporting new Safety Issue.
 *  Notes:
 *      04/01/2021  Placeholder text pulled from contentConfig.json.
 *  Revisions:
 *      04/01/2021  File Created
 *      04/08/2021  Redux components added.
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import SlidingUpPanel from 'rn-sliding-up-panel';

import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    REPORT_LOADED,
    REPORT_UPDATE_VALUE,
} from '../constants/actionTypesReport';

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
    ...state.Report,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: REPORT_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: REPORT_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const { height } = Dimensions.get('window');

const route = 'report';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class ReportScreen extends React.Component {
    constructor(props) {
        super(props);

        this.getImageUpload = this.getImageUpload.bind(this);
        this.getSubmitReport = this.getSubmitReport.bind(this);
        this.getReportType = this.getReportType.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    getImageUpload() {
        const { navigate } = this.props.navigation;

        navigate("ImageLoadTestScreen");
    }

    getSubmitReport() {
        const { navigate } = this.props.navigation;

        navigate("HowItWorksScreen");
    }

    getReportType() {
        const { navigate } = this.props.navigation;

        navigate("ReportTypeScreen");
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-8')}>
                    <StyledText flex="1" textSize="header" textAlign="left">{content["header"]}</StyledText>
                    <StyledText flex="2" textSize="normal" textAlign="left">{content["paragraph"]}</StyledText>
                    <View style={tailwind('pge-tw-flex-row')}>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            <StyledButton appearance="primary" size="small" label={"Redux"} onPress={this.handleStateToConsole} />
                        </View>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            <StyledButton appearance="primary" size="small" label={"Image Upload"} onPress={this.getImageUpload} />
                        </View>
                    </View>
                    <View style={tailwind('pge-tw-flex-row')}>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            <StyledButton appearance="primary" size="small" label={"Submit Report"} onPress={this.getSubmitReport} />
                        </View>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            <StyledButton appearance="primary" size="small" label={"Is Emergency?"} onPress={() => this._panel.show()} />
                        </View>
                    </View>
                    <View style={tailwind('pge-tw-flex-row')}>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            <StyledButton appearance="primary" size="small" label={"Report Type"} onPress={this.getReportType} />
                        </View>
                        <View style={tailwind('pge-tw-w-1/2 pge-tw-px-1')}>
                            
                        </View>
                    </View>
                </View>
                <SlidingUpPanel 
                    ref={c => this._panel = c}
                    draggableRange={{top: height/1.50, bottom: 64}}
                    animatedValue={this._draggedValue}
                    showBackdrop={true}
                >
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white pge-tw-rounded-xl')}>
                        <View style={[tailwind('pge-tw-bg-gray-500 pge-tw-text-white pge-tw-h-16 pge-tw-pt-6 pge-tw-rounded-xl')]}>
                            <StyledText flex="2" textSize="sectionheader" textAlign="center" textColor="white">EMERGENCY PANEL TEST (DRAG)</StyledText>
                        </View>
                        <View style={tailwind('pge-tw-flex-container-1 pge-tw-px-6')}>
                            <View style={tailwind('pge-tw-my-2')}>
                                <StyledText textSize="header" textAlign="left">{content["emergency-header"]}</StyledText>
                            </View>
                            <View style={tailwind('pge-tw-my-2')}>
                                <StyledText textSize="header2" textAlign="left">{content["emergency-subheader1"]}</StyledText>
                            </View>

                            <View style={tailwind('pge-tw-flex-row pge-tw-mb-4')}>
                                <View style={tailwind('pge-tw-w-10 pge-tw-px-1')}>
                                    <Icon name='info-outline' color="#990000"/>
                                </View>
                                <View style={tailwind('pge-tw-w-4/5 pge-tw-px-1')}>
                                    <StyledText textSize="normal" textAlign="left">{content["emergency-condition1"]}</StyledText>
                                </View>
                            </View>
                            <View style={tailwind('pge-tw-flex-row pge-tw-mb-4')}>
                                <View style={tailwind('pge-tw-w-10 pge-tw-px-1')}>
                                    <Icon name='info-outline' color="#990000"/>
                                </View>
                                <View style={tailwind('pge-tw-w-4/5 pge-tw-px-1')}>
                                    <StyledText textSize="normal" textAlign="left">{content["emergency-condition2"]}</StyledText>
                                </View>
                            </View>

                            <View style={tailwind('pge-tw-w-3/4 pge-tw-mb-2')}>
                                <StyledText textSize="normal" textAlign="left">
                                    Then, call PG&E at <Text style={{textDecorationLine: 'underline'}}>1-800-743-5000</Text> to report the incident.
                                </StyledText>
                            </View>

                            <View style={tailwind('pge-tw-w-3/4 pge-tw-mb-2')}>
                                <StyledText textSize="normal" textAlign="left">
                                    Reporting at outage? Report it at the <Text style={{textDecorationLine: 'underline'}}>PG&E Outage Center</Text>.
                                </StyledText>
                            </View>

                            <StyledText flex="2" textSize="header2" textAlign="left">{content["emergency-subheader2"]}</StyledText>
                            <StyledButton appearance="primary" size="full-width" label={"This is not an emergency"} onPress={() => this._panel.hide()} />
                        </View>
                    </View>
                </SlidingUpPanel>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportScreen);