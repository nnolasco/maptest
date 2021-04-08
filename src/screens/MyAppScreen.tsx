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
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
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
            <View>

                {
                    list.map((item, i) => {
                        if (item.type === 'header') {
                            return (
                                <View key={i}>
                                    <Text style={styles.sectiontitle}>{item.name}</Text>
                                    <Divider />
                                </View>
                            )
                        } else if (item.type === 'linkitem') {
                            return (
                                <TouchableOpacity key={i} onPress={() => {Linking.openURL(item.linkURL)}}>
                                    <ListItem bottomDivider>
                                        <Icon name={item.icon} type={item.iconType} color="#0d527a" />
                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: '#0d527a', fontWeight: 'bold' }} >{item.name}</ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="#0d527a" />
                                    </ListItem>
                                </TouchableOpacity>
                            )
                        } else {
                            return (
                                <TouchableOpacity key={i} onPress={() => this.getScreen(item)}>
                                    <ListItem bottomDivider>
                                        <Icon name={item.icon} type={item.iconType} color="#0d527a" />
                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: '#0d527a', fontWeight: 'bold' }} >{item.name}</ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="#0d527a" />
                                    </ListItem>
                                </TouchableOpacity>
                            )
                        }
                    })
                }
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppScreen);