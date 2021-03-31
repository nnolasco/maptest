import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { ListItem, Icon, Divider } from 'react-native-elements';

import * as data from '../../contentConfig.json';
import styles from '../../Styles';
import images from '../assets/images/images';

import NotFoundScreen from './NotFoundScreen';

const list = [
    {
        type: 'header',
        name: 'About & Settings',
        iconType: '',
        icon: ''
    },
    {
        type: 'item',
        name: 'About This App',
        iconType: 'material',
        icon: 'phone-iphone',
        screen: 'HomeScreen'
    },
    {
        type: 'item',
        name: 'Notifications',
        iconType: 'material-community',
        icon: 'bell',
        screen: 'NotFoundScreen'
    },
    {
        type: 'header',
        name: 'Reports',
        iconType: '',
        icon: ''
    },
    {
        type: 'item',
        name: 'My Reports',
        iconType: 'material-community',
        icon: 'clipboard-text'
    },
    {
        type: 'header',
        name: 'Privacy & Terms of Use',
        iconType: '',
        icon: ''
    },
    {
        type: 'item',
        name: 'Privacy Policy',
        iconType: 'material-community',
        icon: 'lock'
    },
    {
        type: 'item',
        name: 'Terms of Use',
        iconType: 'material-community',
        icon: 'text'
    },
    {
        type: 'item',
        name: 'Cookie Policy',
        iconType: 'material-community',
        icon: 'cookie'
    },
    {
        type: 'header',
        name: 'Support',
        iconType: '',
        icon: ''
    },
    {
        type: 'item',
        name: 'Help Center',
        iconType: 'material-community',
        icon: 'help-circle-outline'
    }
]

export default class MyAppScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
    }

    

    getScreen(item) {
        const { navigate } = this.props.navigation;

        console.log(item.screen);
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