import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledSlideButton: custom button component
 * @param {{ 
 *         appearance: string (primary | secondary), 
 *         size: string (full-width | small),
 *         isDisabled: boolean,
 *         text: string,
 *         containsIcon?: boolean,
 *         isLoading?: boolean,
 *     }} props
 */
export function StyledSlideButton(
    props: { 
        appearance: string, 
        size: string,
        isDisabled: boolean,
        label: string,
        containsIcon?: boolean,
        isLoading?: boolean,
    }
){
    const { appearance, size, isDisabled, label, containsIcon, isLoading, onPress, ...otherProps } = props;

    return (
        <View style={tailwind('pge-tw-items-center pge-tw-max-w-full pge-tw-bg-yellow-900 pge-tw-rounded-full pge-tw-p-5 pge-tw-w-full pge-tw-my-3')}>
            <Text style={tailwind('pge-tw-text-blue-900  pge-tw-text-base pge-tw-font-bold no-underline')}>{label}</Text>
        </View>
    );
}