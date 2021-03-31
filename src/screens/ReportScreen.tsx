import * as React from 'react';
import { Text, View } from 'react-native';

import styles from '../../Styles';

export default function ReportScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectiontitle}>Report</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.sectiontitle}>Profile Information</Text>
        </View>
    );
}