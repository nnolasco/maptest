import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from "react-native";
import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledInput: custom text component
 * @param {{ 
 *         size: string (full-width | small),
 *         label: string,
 *         placeholder: string,
 *         defaultValue: string,
 *         isDisabled?: boolean,
 *         isLoading?: boolean,
 *         required?: boolean,
 *         onChangeText: event,
 *         readOnly?: boolean
 *     }} props
 * 
 * Note: boolean must be "True" | "False" (case sensitive)
 */

export function StyledInput(
  props: { 
      size: string,
      label: string,
      placeholder: string,
      defaultValue: string,
      isDisabled?: boolean,
      isLoading?: boolean,
      required?:boolean,
      onChangeText: any,
      readOnly?: boolean,
      error: string
  }
){
    const inputStyle = StyleSheet.create({
        "input": tailwind('pge-tw-input-bc-gray-500 pge-tw-input-height-50 pge-tw-border-radius-30 pge-tw-px-5 pge-tw-input-bw-1'),
        "inputError": tailwind('pge-tw-input-bc-red pge-tw-text-red'),
        "inputLabel": tailwind('pge-tw-font-normal pge-tw-text-base pge-tw-my-1'),
        "inputLabelError": tailwind('pge-tw-text-red')
    });

    const { size, label, placeholder, defaultValue, isDisabled, isLoading, required, onChangeText, readOnly, error, ...otherProps } = props;

    const requiredFlag = required === "True" ? (<Text style={tailwind('pge-tw-text-red')}>*</Text>) : null;

    return (
        <View style={tailwind('pge-tw-my-3')}>

            <Text style={[
                inputStyle.inputLabel,
                error ? inputStyle.inputLabelError : null
            ]}>{label}{requiredFlag}</Text>

            <TextInput placeholder={placeholder} defaultValue={defaultValue} style={[
                inputStyle.input,
                error ? inputStyle.inputError : null
            ]} onChangeText={onChangeText} />

            { error && <Text style={tailwind('pge-tw-text-red pge-tw-text-sm pge-tw-my-1')}>{error}</Text>}
            
        </View>
    );
}