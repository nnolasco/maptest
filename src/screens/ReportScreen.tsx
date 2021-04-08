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
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
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

const route = 'report';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class ReportScreen extends React.Component {
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
            <View style={styles.container}>
                <Text style={styles.sectiontitle}>{content["header"]}</Text>
                <View style={styles.separator} />
                <Text style={styles.textLeft}>{content["paragraph"]}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportScreen);