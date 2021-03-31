import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { ListItem, Icon, Divider } from 'react-native-elements';

import data from '../../contentConfig.json';
import styles from '../../Styles';
import images from '../assets/images/images';

import myAppOutline from '../../myAppConfig.json';

import NotFoundScreen from './NotFoundScreen';
import AboutScreen from './AboutScreen';

const list = myAppOutline.MyAppOutline;


function getNodeByRoute(routes, route) {
    return routes.filter(
        function (routes) {
            return routes.route == route;
        }
    );
}
const configSettings = getNodeByRoute(data.routes, 'myapp');

export default class MyAppScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
    }
    
    getScreen(item) {
        const { navigate } = this.props.navigation;

        console.log("target:", item.screen);
        navigate(item.screen);
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