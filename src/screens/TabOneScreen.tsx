import React, { useRef } from "react";
import { StyleSheet, Button, View } from "react-native";
import MapView, { AnimatedRegion } from "react-native-map-clustering";
import { Marker } from "react-native-maps";

export default function TabOneScreen() {

    const INITIAL_REGION = {
        latitude: 37.72825,
        longitude: -122.4324,
        latitudeDelta: 0.25,
        longitudeDelta: 0.15
    };
    const mapRef = useRef();

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

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start', // if you want to fill rows left to right
            height: 40
        },
        item: {
            padding: 5,
            height: 30,
            width: '50%' // is 50% of container width
        }
    })

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
                <Button onPress={animateToRegion} title="Animate" />
            </View>
            <View style={styles.item}>
                <Button onPress={animateToCurrent} title="Current Location" />
            </View>
        </View>
        </>
    );
}

