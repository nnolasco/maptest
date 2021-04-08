/*
 *******************************************************************************
 *  Filename:   ./src/screens/HomeScreen.tsx
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
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MapView, { AnimatedRegion } from "react-native-map-clustering";
import { Marker } from "react-native-maps";

import { connect } from "react-redux";
import { addTest } from "./actions";

const mapStateToProps = (state) => {
    const { test } = state
    return { test }
};

const mapDispatchToProps = dispatch => ({
    onAdd: (payload) =>
        dispatch({ type: "ADD_TEST", payload }),
});

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mapRef = createRef();

        const INITIAL_REGION = {
            latitude: 37.72825,
            longitude: -122.4324,
            latitudeDelta: 0.25,
            longitudeDelta: 0.15
        };

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

        const addTest = () => {
            console.log('add clicked');
            this.props.addTest('test guy');
        }

        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start', // if you want to fill rows left to right
            },
            item: {
                padding: 5,
                width: '50%' // is 50% of container width
            },
            button: {
                alignItems: 'center',
                backgroundColor: '#1f68e2',
                padding: 10
            },
            buttonText: {
                color: '#ffffff'
            }
        });

        return (
            <>
                <MapView
                    ref={mapRef}
                    initialRegion={INITIAL_REGION}
                    style={{ flex: 1, height: 400 }}
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
                    <Marker coordinate={{ latitude: 37.78525, longitude: -122.4224 }} />
                    <Marker coordinate={{ latitude: 37.7765, longitude: -122.4124 }} />
                    <Marker coordinate={{ latitude: 37.7965, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.8065, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.7765, longitude: -122.4424 }} />
                    <Marker coordinate={{ latitude: 37.7565, longitude: -122.4324 }} />
                </MapView>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <TouchableOpacity style={styles.button} onPress={animateToRegion} >
                            <Text style={styles.buttonText} >Animate</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity style={styles.button} onPress={animateToCurrent} >
                            <Text style={styles.buttonText} >Current Location</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={addTest} >
                        <Text style={styles.buttonText} >Add</Text>
                    </TouchableOpacity>
                </View>
                <Text>test</Text>
                </View>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);