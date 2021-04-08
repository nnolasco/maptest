/*
 *******************************************************************************
 *  Filename:   ./src/screens/IntroScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Introduction Screen with slideshow.
 *  Notes:
 *      
 *  Revisions:
 *      04/01/2021  NJN     File Created
 *******************************************************************************
 */

import * as React from 'react';
import { TouchableOpacity, SafeAreaView, Text, View, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import styles from '../../Styles';
import images from '../assets/images/images';

import { connect } from 'react-redux';

import {
    ONBOARDING_LOADED,
    ONBOARDING_UPDATE_VALUE,
} from '../constants/actionTypesOnboarding';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

const mapStateToProps = state => ({
    ...state.Onboarding
});

const mapDispatchToProps = dispatch => ({
});

const route = 'onboarding';
const configSettings = utility.getNodeByRoute(data.routes, route);
const buttons = utility.buttonDictionary(configSettings[0].buttons);

const slides = configSettings[0].slides;
type Item = typeof slides[0];

export class IntroScreen extends React.Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.renderNextButton = this.renderNextButton.bind(this);
        this.renderDoneButton = this.renderDoneButton.bind(this);
        this.keyExtractor = this.keyExtractor.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    slider: AppIntroSlider | undefined;

    renderItem = ({ item }: { item: Item }) => {
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

    renderNextButton = () => {
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{buttons["next"]}</Text>
            </View>
        );
    };

    renderDoneButton = () => {
        return (
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{buttons["done"]}</Text>
            </View>
        );
    };

    onDone = () => {
        const { navigate } = this.props.navigation;

        navigate('EmailScreen');
    }

    keyExtractor = (item: Item) => item.key;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppIntroSlider
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    renderDoneButton={this.renderDoneButton}
                    renderNextButton={this.renderNextButton}
                    bottomButton
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDot}
                    ref={(ref) => (this.slider = ref!)}
                    data={slides}
                    onDone={this.onDone}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);