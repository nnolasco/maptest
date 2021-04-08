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
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
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
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerLeft}>
                    <Text style={styles.sectiontitle}>{content["header1"]}</Text>
                    <Text style={styles.textLeft}>{content["paragraph1"]}</Text>
                    <Text style={styles.sectiontitle}>{content["header2"]}</Text>
                    <Text style={styles.textLeft}>{content["paragraph2"]}</Text>
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieScreen);