import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ListItem, Icon, Divider } from 'react-native-elements';

export default function MyAppScreen() {

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
            icon: 'phone-iphone'
        },
        {
            type: 'item',
            name: 'Notifications',
            iconType: 'material-community',
            icon: 'bell'
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

    return (
        <View>
            
            {
                list.map((item, i) => {
                    if (item.type === 'header') {
                        return (
                            <View key={i}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Divider />
                            </View>
                        )
                    } else {
                        return (
                            <ListItem key={i} bottomDivider>
                                <Icon name={item.icon} type={item.iconType} color="#0d527a"
                                />
                                <ListItem.Content>
                                    <ListItem.Title style={{ color: '#0d527a', fontWeight: 'bold' }} >{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron color="#0d527a" />
                            </ListItem>
                        )
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
        color: '#333333'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
