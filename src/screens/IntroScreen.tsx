/*
 *******************************************************************************
 * 
 *  Filename:   ./src/screens/IntroScreen.tsx
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Introduction Screen with slideshow.
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Thursday, April 1, 2021 - 12:42 AM (CST)
 *  
 *  Notes:
 *      
 *  Revisions:
 *      04/01/2021  NJN     File Created
 *      
 *      
 *  Copyright (c) 2021 - PricewaterhouseCoopers - All Rights Reserved.
 *  Unauthorized copying of this file via any medium is strictly prohibited.
 *  Proprietary and Confidential.
 *
 *******************************************************************************
 */

import * as React from 'react';
import { TouchableOpacity, SafeAreaView, Text, View, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

const testvalue = data.testing;

const route = 'onboarding';

console.log("enter:", route, ":", testvalue);

const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);

const slides = configSettings[0].slides;
type Item = typeof slides[0];

export default class IntroScreen extends React.Component {
    constructor() {
        super();

        this._onDone = this._onDone.bind(this);
    }

    slider: AppIntroSlider | undefined;

    _renderItem = ({ item }: { item: Item }) => {
        var slideImage = images.graphics[item.image];
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                }} >
                <SafeAreaView style={styles.slide}>
                    <Image source={slideImage} style={styles.slideImage} />
                    <Text style={styles.slideTitle}>{item.title}</Text>
                    <Text style={styles.slideText}>{item.text}</Text>
                </SafeAreaView>
            </View>
        );
    };

    _renderNextButton = () => {
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{buttons["next"]}</Text>
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{buttons["done"]}</Text>
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
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDot}
                    ref={(ref) => (this.slider = ref!)}
                    data={slides}
                    onDone={this._onDone}
                />
            </View>
        );
    }
}

