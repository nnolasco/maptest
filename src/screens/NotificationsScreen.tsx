/*
 *******************************************************************************
 *  Filename:   ./src/screens/NotificationsScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   MyApp > Notifications - screen to handle notification settings
 *  Notes:
 *  
 *  Revisions:
 *      04/01/2021  File Created
 *      04/08/2021  Added Redux components.
 *******************************************************************************
 */

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

import {
    NOTIFICATIONS_LOADED,
    NOTIFICATIONS_UPDATE_VALUE,
} from '../constants/actionTypesNotifications';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

const mapStateToProps = state => ({
    ...state.Notifications,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: NOTIFICATIONS_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: NOTIFICATIONS_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'notifications';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

export class NotificationsScreen extends React.Component {
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
                <Text style={styles.sectiontitle}>{content["header1"]}</Text>
                <Text style={styles.text}>{content["paragraph1"]}</Text>
                <Text style={styles.text}>{content["paragraph2"]}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);