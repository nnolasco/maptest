import * as React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';

import { ListItem, Icon, Divider } from 'react-native-elements';

import data from '../../contentConfig.json';
import styles from '../../Styles';
import images from '../assets/images/images';
import myAppOutline from '../../myAppConfig.json';

function getNodeByRoute(routes, route) {
    return routes.filter(
        function (routes) {
            return routes.route == route;
        }
    );
}

const configSettings = getNodeByRoute(data.routes, 'cookies');

var content = {};

for (var i = 0; i < configSettings[0].content.length; i++) {
    content[configSettings[0].content[i].name] = configSettings[0].content[i].text;
}

export default class CookieScreen extends React.Component {
    constructor() {
        super();

        this.getScreen = this.getScreen.bind(this);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
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