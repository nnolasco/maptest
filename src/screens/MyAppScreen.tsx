/*
 *******************************************************************************
 *  Filename:   ./src/screens/MyAppScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Screen for Home > My App
 *  Notes:
 *      04/03/2021  Routes for this screen are configured under
 *                  ./myAppConfig.json
 *  Revisions:
 *      04/03/2021  File Created
 *      04/08/2021  Adding Redux components.
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Linking } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import myAppOutline from '../../myAppConfig.json';

import NotFoundScreen from './NotFoundScreen';
import AboutScreen from './AboutScreen';

import {
    MYAPP_LOADED,
    MYAPP_UPDATE_VALUE,
} from '../constants/actionTypesMyApp';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledListItem } from '../components/StyledListItem';
import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.MyApp,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: MYAPP_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: MYAPP_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'myapp';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

const list = myAppOutline.MyAppOutline;

export class MyAppScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
        this.getLink = this.getLink.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }
    
    getScreen(item) {
        const { navigate } = this.props.navigation;

        console.log("target:", item.screen);
        navigate(item.screen);
    }
    
    getLink(item) {
        const { navigate } = this.props.navigation;

        console.log("link target:", item.link);
        Linking.openURL(item.link);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ScrollView>
                {
                    list.map((item, i) => {
                        if (item.type === 'header') {
                            return (
                                <View key={i}>
                                    <StyledText textSize="listheader" textAlign="left">{item.name}</StyledText>
                                    <Divider />
                                </View>
                            )
                        } else if (item.type === 'linkitem') {
                            return (
                                <StyledListItem keyValue={i} icon={item.icon} iconType={item.iconType} label={item.name} onPress={() => {Linking.openURL(item.linkURL)}}/>
                            )
                        } else {
                            return (
                                <StyledListItem keyValue={i} icon={item.icon} iconType={item.iconType} label={item.name} onPress={() => this.getScreen(item)}/>
                            )
                        }
                    })
                }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppScreen);