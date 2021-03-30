import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const IntroScreen = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Introduction</Text>
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('RootNavigator')}>
            <Text style={styles.buttonTextStyle}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}
export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    buttonStyle: {
        backgroundColor: '#fbba35',
        borderWidth: 0,
        color: '#0d527a',
        borderColor: '#fbba35',
        height: 60,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#0d527a',
        fontWeight: 'bold',
        paddingVertical: 18,
        paddingHorizontal: 50,
        fontSize: 16,
    },
});
