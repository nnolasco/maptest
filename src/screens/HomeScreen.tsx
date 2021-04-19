/*
 *******************************************************************************
 *  Filename:   ./src/screens/HomeScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Primary application screen with interactive map.
 *  Notes:
 *      04/01/2021  Proof of concept code only. Needs a lot of work to
 *                  clean up. Needs to be hooked up to utility.js for
 *                  configuration settings. All hardcoded locations need
 *                  to be replaced with live locations.
 *  Revisions:
 *      04/01/2021  File Created
 *******************************************************************************
 */

import React, { createRef } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Icon } from 'react-native-elements';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import MapView, { AnimatedRegion } from "react-native-map-clustering";
import { Marker } from "react-native-maps";

import { connect } from 'react-redux';

import {
    HOME_LOADED,
    HOME_UPDATE_VALUE,
} from '../constants/actionTypesHome';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';
import { StyledButton } from '../components/StyledButton';
import { getIconMap } from "ionicons/dist/types/components/icon/utils";

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.Home,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: HOME_LOADED, payload }),
    onUnload: () => 
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: HOME_UPDATE_VALUE, key, value }),
    onStateToConsole: () => 
        dispatch({ type: COMMON_STATETOCONSOLE })
});

const route = 'home';
const configSettings = utility.getNodeByRoute(data.routes, route);

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handleStateToConsole = this.handleStateToConsole.bind(this);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    render() {
        const INITIAL_REGION = {
            latitude: 37.72825,
            longitude: -122.4324,
            latitudeDelta: 0.25,
            longitudeDelta: 0.15
        };
        const mapRef = createRef();
    
        const animateToRegion = () => {
            let region = {
                latitude: 37.72825,
                longitude: -122.4324,
                latitudeDelta: 0.25,
                longitudeDelta: 0.15
            };
    
            mapRef.current.animateToRegion(region, 2000);
        };
    
        const animateToCurrent = () => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let region = {
                        latitude: parseFloat(position.coords.latitude),
                        longitude: parseFloat(position.coords.longitude),
                        latitudeDelta: 5,
                        longitudeDelta: 5
                    };
                    mapRef.current.animateToRegion(region, 2000);
                    
                },
                error => console.log(error),
                {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000
                }
            );
        };

        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <View style={tailwind('pge-tw-flex-row')}>
                    <View style={tailwind('pge-tw-w-1/3 pge-tw-px-1')}>
                        <StyledButton appearance="primary" size="small" label={"local"} onPress={animateToRegion} />
                    </View>
                    <View style={tailwind('pge-tw-w-1/3 pge-tw-px-1 pge-tw-py-4')}>
                      <Icon name="map-marker" type="font-awesome" onPress={animateToCurrent}/>
                    </View>
                    <View style={tailwind('pge-tw-w-1/3 pge-tw-px-1')}>
                        <StyledButton appearance="primary" size="small" label={"redux"} onPress={this.handleStateToConsole} />
                    </View>
                </View>
                <MapView
                    ref={mapRef}
                    initialRegion={INITIAL_REGION}
                    style={tailwind('pge-tw-h-full')}
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
                    <Marker coordinate={{ latitude: 37.78525, longitude: -122.4224 }} />
                    <Marker coordinate={{ latitude: 37.7765, longitude: -122.4124 }} />
                    <Marker coordinate={{ latitude: 37.7965, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.8065, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.7765, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.7565, longitude: -122.4324 }} />
                </MapView>
                
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
