/*
 *******************************************************************************
 *  Filename:   ./src/screens/IntroScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Introduction Screen with slideshow.
 *  Notes:
 *      
 *  Revisions:
 *      04/01/2021  File Created
 *      04/13/2021  Replaced styles with Tailwind Styles.
 *******************************************************************************
 */

import * as React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import data from '../../contentConfig.json';
import utility from '../common/utility';
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

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';
import { StyledSlideButton } from '../components/StyledSlideButton';

const {tailwind, getColor} = create(styles);

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
            <View style={tailwind('pge-tw-flex-container-1 pge-tw-flex-col pge-tw-bg-white pge-tw-max-h-4/5')} >
                <Image source={slideImage} style={tailwind('pge-tw-flex-container-5 pge-tw-w-full pge-tw-h-full pge-tw-image-resize-contain')} />
                <View style={tailwind('pge-tw-px-4')}>
                    <StyledText flex="1" textSize="header" textAlign="center">{item.title}</StyledText>
                    <StyledText flex="1" textSize="normal" textAlign="center">{item.text}</StyledText>
                </View>
            </View>
        );
    };

    renderNextButton = () => {
        return (
            <StyledSlideButton appearance="primary" size="full-width" label={buttons["next"]} />
        );
    };

    renderDoneButton = () => {
        return (
            <StyledSlideButton appearance="primary" size="full-width" label={buttons["done"]} />
        );
    };

    onDone = () => {
        const { navigate } = this.props.navigation;

        navigate('EmailScreen');
    }

    keyExtractor = (item: Item) => item.key;

    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-2')}>
                    <AppIntroSlider
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        renderDoneButton={this.renderDoneButton}
                        renderNextButton={this.renderNextButton}
                        bottomButton
                        dotStyle={tailwind('pge-tw-bg-blue-900 pge-tw-bg-opacity-20 pge-tw-w-4 pge-tw-h-4 pge-tw-mx-3 pge-tw-border-radius-10')}
                        activeDotStyle={tailwind('pge-tw-bg-blue-900 pge-tw-bg-opacity-90 pge-tw-w-4 pge-tw-h-4 pge-tw-mx-3 pge-tw-border-radius-10')}
                        ref={(ref) => (this.slider = ref!)}
                        data={slides}
                        onDone={this.onDone}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);