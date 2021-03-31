import * as React from 'react';
import { TouchableOpacity, ImageBackground, SafeAreaView, Text, View, Image, TextInput } from 'react-native';

import * as data from '../../contentConfig.json';
import styles from '../../Styles';
import images from '../assets/images/images';

const testvalue = data.testing;
console.log(testvalue); // console testing

const route = 'email';

function getNodeByRoute(routes, route) {
    return routes.filter(
        function (routes) {
            return routes.route == route;
        }
    );
}

function getNodeByContent(content, name) {
    return content.filter(
        function (content) {
            return content.name == name;
        }
    );
}

const configSettings = getNodeByRoute(data.routes, 'signin');

export default class EmailScreen extends React.Component {
    constructor() {
        super();

        this._onDone = this._onDone.bind(this);
    }

    _onDone = () => {
        const { navigate } = this.props.navigation;

        console.log('home');
        navigate('RootNavigator');
    }

    render() {
        return (
            <View style={styles.containerLeft}>
                <Text style={styles.title}>{configSettings[0].header}</Text>
                <Text style={styles.text}>{getNodeByContent(configSettings[0].content, "paragraph1")[0].text}</Text>
                <Text style={styles.text}>{getNodeByContent(configSettings[0].content, "paragraph2")[0].text}</Text>

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={this._onDone} >
                    <Text style={styles.buttonTextStyle} >Continue</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

