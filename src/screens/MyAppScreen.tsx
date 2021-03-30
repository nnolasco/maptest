import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ListItem, Icon } from 'react-native-elements';

export default function MyAppScreen() {

    const list = [
        {
            type: 'header',
            name: 'About & Settings',
            icon: ''
        },
        {
            type: 'item',
            name: 'About This App',
            icon: 'av-timer'
        },
        {
            type: 'item',
            name: 'Notifications',
            icon: 'flight-takeoff'
        },
        {
            type: 'header',
            name: 'Reports',
            icon: ''
        },
        {
            type: 'item',
            name: 'My Reports',
            icon: 'av-timer'
        },
        {
            type: 'header',
            name: 'Privacy & Terms of Use',
            icon: 'flight-takeoff'
        },
        {
            type: 'item',
            name: 'Privacy Policy',
            icon: 'av-timer'
        },
        {
            type: 'item',
            name: 'Terms of Use',
            icon: 'flight-takeoff'
        },
        {
            type: 'item',
            name: 'Cookie Policy',
            icon: 'flight-takeoff'
        },
        {
            type: 'header',
            name: 'Support',
            icon: ''
        },
        {
            type: 'item',
            name: 'Help Center',
            icon: 'av-timer'
        }
    ]

    return (
        <View>
            
            {
                list.map((item, i) => {
                    if (item.type === 'header') {
                        return (
                            <Text key={i} style={styles.title}>{item.name}</Text>
                        )
                    } else {
                        return (
                            <ListItem key={i} bottomDivider>
                                <Icon name={item.icon} color="#0d527a"
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
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        color: '#333333'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
