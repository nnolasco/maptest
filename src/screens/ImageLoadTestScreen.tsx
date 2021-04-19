/*
 *******************************************************************************
 *  Filename:   ./src/screens/ImageLoadTestScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Proof of concept testing screen for image loading.
 *  Notes:
 *      
 *  Revisions:
 *      04/11/2021  File Created
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import * as ImagePicker from 'expo-image-picker';

import {
    REPORT_LOADED,
    REPORT_UPDATE_VALUE,
} from '../constants/actionTypesReport';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';
import { RSA_NO_PADDING } from 'node:constants';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.Report,
    masterState: state,
    status: state.Report.status || 'READY',
    base64data: state.Report.base64data || 'no file selected'
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: REPORT_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: REPORT_UPDATE_VALUE, key, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'report';
const configSettings = utility.getNodeByRoute(data.routes, route);
const content = utility.contentDictionary(configSettings[0].content);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
        console.log('image uri:', result.uri);
        return result.base64;
    }
  };

export class ReportScreen extends React.Component {
    constructor(props) {
        super(props);

        this.getScreen = this.getScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    getImage = async() => {
        this.props.onUpdateValue('status', "OPENING PICKER");
        let base64data = await pickImage();
        await this.props.onUpdateValue('status', "LOADING...");
        await this.props.onUpdateValue('filesize', this.numberWithCommas(base64data.length) + ' bytes');
        await this.props.onUpdateValue('base64data', this.truncate(base64data, 10000));
        await this.props.onUpdateValue('status', "COMPLETE");
    }
    render() {
        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-8')}>
                    <StyledText flex="1" textSize="header" textAlign="left">Image Upload Test</StyledText>
                    <StyledText flex="2" textSize="normal" textAlign="left">Select an image and view base64 encoding.</StyledText>

                    <StyledButton appearance="primary" size="small" label={"Pick Image"} onPress={this.getImage} />

                    <StyledText flex="1" textSize="header" textAlign="left">Status</StyledText>
                    <StyledText flex="1" textSize="normal" textAlign="left">{this.props.status}</StyledText>

                    <StyledText flex="1" textSize="header" textAlign="left">Base 64 Result</StyledText>
                    <StyledText flex="1" textSize="normal" textAlign="left">Size: {this.props.filesize}</StyledText>
                    <ScrollView style={tailwind('pge-tw-input-bw-1 pge-tw-input-bc-gray-500')}>
                        <StyledText flex="5" textSize="normal" textAlign="left">{this.props.base64data}</StyledText>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportScreen);