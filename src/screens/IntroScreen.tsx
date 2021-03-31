import * as React from 'react';
import { TouchableOpacity, ImageBackground, SafeAreaView, Text, View, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import * as data from '../../contentConfig.json';
import styles from '../../Styles';

import images from '../assets/images/images';

const testvalue = data.testing;
console.log(testvalue); // console testing

const route = 'onboarding';

function getNodeByRoute(routes, route) {
    return routes.filter(
        function (routes) {
            return routes.route == route;
        }
    );
}

function getNodeByButton(buttons, button) {
    return buttons.filter(
        function (buttons) {
            return buttons.name == button;
        }
    );
}

const configSettings = getNodeByRoute(data.routes, 'onboarding');

const slides = configSettings[0].slides;

type Item = typeof slides[0];

export default class IntroScreen extends React.Component {
    constructor() {
        super();

        this._onDone = this._onDone.bind(this);
    }

    slider: AppIntroSlider | undefined;

    _renderItem = ({ item }: { item: Item }) => {
        var testImage = images.graphics[item.image];
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                }} >
                <SafeAreaView style={styles.slide}>
                    <Image source={testImage} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </SafeAreaView>
            </View>
        );
    };

    _renderNextButton = () => {
        var button = getNodeByButton(configSettings[0].buttons, "next");
        
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{button[0].text}</Text>
            </View>
        );
    };

    _renderDoneButton = () => {
        var button = getNodeByButton(configSettings[0].buttons, "done");
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{button[0].text}</Text>
            </View>
        );
    };

    _onDone = () => {
        const { navigate } = this.props.navigation;

        navigate('EmailScreen');
    }

    _keyExtractor = (item: Item) => item.key;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppIntroSlider
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    bottomButton
                    dotStyle={{ backgroundColor: 'rgba(13, 82, 122, .2)', borderRadius: 10, width: 15, height: 15, marginRight: 10, marginLeft: 10 }}
                    activeDotStyle={{ backgroundColor: 'rgba(13, 82, 122, .9)', borderRadius: 10, width: 15, height: 15, marginRight: 10, marginLeft: 10 }}
                    ref={(ref) => (this.slider = ref!)}
                    data={slides}
                    onDone={this._onDone}
                />
            </View>
        );
    }
}

