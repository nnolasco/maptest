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
import { TouchableOpacity, View, Text } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
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
        return (
            <View style={styles.container}>
                <Text style={styles.sectiontitle}>{content["header1"]}</Text>
                <Text style={styles.text}>{content["paragraph1"]}</Text>
                <Text style={styles.text}>{content["paragraph2"]}</Text>
                <View style={{ borderBottomColor: '#999999', borderBottomWidth: 1, width: '80%'}} />
                <Text style={styles.sectiontitle}>{content["header2"]}</Text>
                <Text style={styles.text}>{content["paragraph3"]}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleStateToConsole} >
                    <Text style={styles.buttonTextStyle} >Test Redux State</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);