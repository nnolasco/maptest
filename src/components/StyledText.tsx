import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledText: custom text component
 * @param {{ 
 *         flexSize: number,
 *         textSize: string ( header | normal ),
 *         textAlign: string ( left | center | right ),
 *         textColor: string ( black | white )
 *         isLoading?: boolean,
 *     }} props
 */

export function StyledText(
  props: { 
      flexSize: number,
      textSize: string,
      textAlign: string,
      textColor: string,
      isLoading?: boolean,
  }
){
  const { flexSize, textSize, textAlign, textColor, children, isLoading, ...otherProps } = props;

  return (
      <Text style={[
        {flex: flexSize},
        textSize === "header" && tailwind('pge-tw-font-semibold pge-tw-text-lg pge-tw-py-4'),
        textSize === "header2" && tailwind('pge-tw-font-semibold pge-tw-text-md pge-tw-mb-4'),
        textSize === "sectionheader" && tailwind('pge-tw-font-bold pge-tw-text-base pge-tw-mb-4'),
        textSize === "listheader" && tailwind('pge-tw-font-bold pge-tw-text-base pge-tw-mt-5 pge-tw-mb-2 pge-tw-ml-4'),
        textSize === "normal" && tailwind('pge-tw-font-normal pge-tw-text-base pge-tw-mb-4'),
        textAlign === "left" && tailwind('pge-tw-text-left'),
        textAlign === "center" && tailwind('pge-tw-text-center'),
        textAlign === "right" && tailwind('pge-tw-text-right'),
        textColor === "black" && tailwind('pge-tw-text-black'),
        textColor === "white" && tailwind('pge-tw-text-white')
      ]} >{children}</Text>
  );
}