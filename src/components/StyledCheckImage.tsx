import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, ImageStore } from "react-native";
import { Icon } from 'react-native-elements';
//import { tailwind, getColor } from '../utils/tailwind.js'
//import tailwind from 'tailwind-rn';

import images from '../assets/images/images';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';
import { relative } from 'node:path';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledButton: custom button component
 * @param {{ 
 *         appearance: string ( primary | secondary | text | report ), 
 *         size: string ( full-width | small | text ),
 *         image: string,
 *         isDisabled: boolean,
 *         text: string,
 *         containsIcon?: boolean,
 *         isLoading?: boolean,
 *         isChecked?: boolean
 *     }} props
 */
export function StyledCheckImage(
    props: { 
        appearance: string, 
        size: string,
        imageName: string,
        isDisabled: boolean,
        label: string,
        containsIcon?: boolean,
        isLoading?: boolean,
        isChecked?: boolean
    }
){
        const buttonStyles = StyleSheet.create({
            buttonContainer: tailwind('pge-tw-items-center pge-tw-rounded-xl pge-tw-w-full pge-tw-m-2 pge-tw-bg-white'),
            buttonSquare: { width: 160, height: 170 },
            buttonOther: { width: 335, height: 50 },
            imageSquare: { width: 160, height: 130 },
            imageOther: { width: 0, height: 0 },
            topRight: { top: 15, right: 15 },
            middleRight: {top: 7, right: 10 },
            borderActive: tailwind('pge-tw-absolute pge-tw-rounded-xl pge-tw-input-bw-2 pge-tw-input-bc-blue-900'),
            borderInactive: tailwind('pge-tw-absolute pge-tw-rounded-xl pge-tw-input-bw-2 pge-tw-input-bc-gray-500'),
            buttonText: tailwind('pge-tw-absolute pge-tw-bg-white pge-tw-text-blue-900 pge-tw-text-base pge-tw-w-full pge-tw-pt-3 pge-tw-pl-3'),
            buttonTextOther: tailwind('pge-tw-absolute pge-tw-bg-white pge-tw-text-blue-900 pge-tw-text-base pge-tw-pt-1 pge-tw-pl-3'),
            buttonLeftAlign: { top: 120, height: 32 },
            middleLeftAlign: { top: 7 },
        });

        const { appearance, size, imageName, isDisabled, label, containsIcon, isLoading, isChecked, onPress, ...otherProps } = props;

        const borderView = isChecked ? buttonStyles.borderActive : buttonStyles.borderInactive;

        return (
            <TouchableOpacity style={[
                buttonStyles.buttonContainer, 
                size === 'square' && buttonStyles.buttonSquare,
                size === 'other' && buttonStyles.buttonOther,
            ]} onPress={onPress} >
                    <Image source={images.graphics[imageName]} style={[tailwind('pge-tw-rounded-xl'), 
                        size === 'square' && buttonStyles.imageSquare,
                        size === 'other' && buttonStyles.imageOther
                    ]} />
                    {
                        isChecked ?
                        (<Image source={images.icons['checkboxActive']} style={[tailwind('pge-tw-absolute'), 
                            size === 'square' && buttonStyles.topRight,
                            size === 'other' && buttonStyles.middleRight
                        ]} />) : size === 'square' ?
                        (<Image source={images.icons['checkboxInactive']} style={[tailwind('pge-tw-absolute'), buttonStyles.topRight]} />) :
                        (<Image source={images.icons['checkboxOtherInactive']} style={[tailwind('pge-tw-absolute pge-tw-opacity-40'), buttonStyles.middleRight]} />)


                    }
                    <View style={[borderView, 
                        size === 'square' && buttonStyles.buttonSquare,
                        size === 'other' && buttonStyles.buttonOther,
                    ]}>
                        <Text style={[
                            size === 'square' && buttonStyles.buttonText, 
                            size === 'other' && buttonStyles.buttonTextOther,
                            size === 'square' && buttonStyles.buttonLeftAlign,
                            size === 'other' && buttonStyles.middleLeftAlign,
                        ]}>{label}</Text>
                    </View>
            </TouchableOpacity>
        );
}