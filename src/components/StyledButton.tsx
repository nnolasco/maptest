import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, ImageStore } from "react-native";
import { Icon } from 'react-native-elements';
//import { tailwind, getColor } from '../utils/tailwind.js'
//import tailwind from 'tailwind-rn';

import images from '../assets/images/images';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledButton: custom button component
 * @param {{ 
 *         appearance: string ( primary | secondary | text | report ), 
 *         size: string ( full-width | small | text ),
 *         icon: string,
 *         isDisabled: boolean,
 *         text: string,
 *         containsIcon?: boolean,
 *         isLoading?: boolean,
 *     }} props
 */
export function StyledButton(
    props: { 
        appearance: string, 
        size: string,
        icon: string,
        isDisabled: boolean,
        label: string,
        containsIcon?: boolean,
        isLoading?: boolean,
    }
){
    const buttonStyles = StyleSheet.create({
        buttonContainer: tailwind('pge-tw-items-center pge-tw-bg-yellow-900 pge-tw-rounded-full pge-tw-w-full'),
        textContainer: tailwind('pge-tw-items-center pge-tw-w-full'),
        reportContainer: tailwind('pge-tw-items-center pge-tw-bg-white pge-tw-rounded-full pge-tw-w-full pge-tw-input-bw-1 pge-tw-input-bc-gray-500'),
        buttonView: tailwind(''),
        reportView: tailwind('pge-tw-w-full pge-tw-flex-row pge-tw-content-between'),
        buttonFull: tailwind('pge-tw-max-w-full pge-tw-p-5 pge-tw-my-3'),
        buttonSmall: tailwind('pge-tw-max-w-full pge-tw-p-2 pge-tw-my-3'),
        buttonText: tailwind('pge-tw-text-blue-900 pge-tw-text-base pge-tw-font-bold no-underline'),
        reportText: tailwind('pge-tw-flex-1 pge-tw-text-blue-900 pge-tw-text-md pge-tw-font-normal no-underline pge-tw-px-4 pge-tw-py-2')
    });
    // const buttonStyles = StyleSheet.create({
    //     buttonContainer: {
    //         alignItems: tailwind.textCenter,
    //         lineHeight: tailwind.leadingLoose,
    //     },
    //     buttonText: {
    //         color: tailwind('blue-900'),
    //         fontSize: tailwind('lg'),
    //         fontFamily: tailwind('font-sans'),
    //         lineHeight: tailwind('leading-loose'),
    //         textDecorationStyle: tailwind('no-underline')
    //     },
    //     buttonDisabled: {
    //         opacity: tailwind.opacity5
    //     }
    // });

    // const primaryButtonStyles = StyleSheet.create({
    //     button: {
    //         alignItems: tailwind('text-center'),
    //         backgroundColor: tailwind('yellow-900'),
    //         lineHeight: tailwind('leading-loose'),
    //         borderColor: tailwind('yellow-900'),
    //         borderWidth: tailwind('border')
            
    //     },
    //     buttonText: {
    //         color: tailwind('blue-900'),
    //         fontSize: tailwind('lg'),
    //         fontFamily: tailwind('font-sans'),
    //         lineHeight: tailwind('leading-loose'),
    //         textDecorationStyle: tailwind('no-underline')
    //     }
    // });

    // const secondaryButtonStyles = StyleSheet.create({
    //     button: {
    //         alignItems: tailwind.textCenter,
    //         backgroundColor: tailwind.white,
    //         lineHeight: tailwind.leadingLoose,
    //         borderColor: tailwind.blue900,
    //         borderWidth: tailwind.border
    //     },
    //     buttonText: {
    //         color: tailwind('blue-900'),
    //         fontSize: tailwind('lg'),
    //         fontFamily: tailwind('font-sans'),
    //         lineHeight: tailwind('leading-loose'),
    //         textDecorationStyle: tailwind('no-underline')
    //     }
    // });

    const { appearance, size, icon, isDisabled, label, containsIcon, isLoading, onPress, ...otherProps } = props;

    let iconImage = null;
    let chevronImage = null;

    if (appearance === 'report') {
        iconImage = (<Image source={images.icons[icon]} style={{width: 40, height: 40}} />);
        chevronImage = (<View style={tailwind('pge-tw-py-2')}><Icon name="chevron-right" type="material-community" /></View>);
    } else {
        iconImage = null;
        chevronImage = null;
    }

    return (
        // <TouchableOpacity style={[ buttonStyles.buttonContainer, appearance === "primary" && primaryButtonStyles.button, appearance === "secondary" && secondaryButtonStyles.button, isDisabled && buttonStyles.buttonDisabled ]}  >
        //     <Text style={[ buttonStyles.buttonText, appearance === "primary" && primaryButtonStyles.buttonText, appearance === "secondary" && secondaryButtonStyles.buttonText ]}>{label}</Text>
        // </TouchableOpacity>

        <TouchableOpacity style={[
            appearance === 'primary' && buttonStyles.buttonContainer,
            appearance === 'text' && buttonStyles.textContainer,
            appearance === 'report' && buttonStyles.reportContainer,
            size === 'full-width' && buttonStyles.buttonFull,
            size === 'small' && buttonStyles.buttonSmall,
            size === 'text' && buttonStyles.buttonText,
        ]} onPress={onPress} >
            <View style={[
                appearance === 'report' && buttonStyles.reportView,
                appearance !== 'report' && buttonStyles.buttonView
            ]}>
                {iconImage}
                <Text style={[
                    appearance === 'report' && buttonStyles.reportText,
                    appearance !== 'report' && buttonStyles.buttonText
                ]}>{label}</Text>
                {chevronImage}
            </View>
        </TouchableOpacity>
    );
}