import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Linking } from "react-native";
import { ListItem, Icon, Divider } from 'react-native-elements';
import {create} from 'tailwind-rn';
import styles from '../../styles.json';

const {tailwind, getColor} = create(styles);

/**
 *
 * StyledListItem: custom text component
 * @param {{ 
 *         keyValue: string,
 *         linkurl: string,
 *         icon: string,
 *         iconType: string,
 *         label: string,
 *         onPress: Event,
 *         isLoading?: boolean
 *     }} props
 */

export function StyledListItem(
  props: { 
      keyValue: string,
      linkurl: string,
      icon: string,
      iconType: string,
      label: string,
      onPress: any,
      isLoading?: boolean,
  }
){
  const { keyValue, linkurl, icon, iconType, label, onPress, isLoading, ...otherProps } = props;

  return (
    <TouchableOpacity key={keyValue} onPress={onPress}>
      <ListItem key={keyValue} bottomDivider>
        <Icon name={icon} type={iconType} color="#0d527a" />
        <ListItem.Content>
          <ListItem.Title style={tailwind('pge-tw-font-bold pge-tw-text-base pge-tw-text-blue-900')} >{label}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="#0d527a" />
      </ListItem>
    </TouchableOpacity>
  );
}