/*
 *******************************************************************************
 *  Filename:   ./src/screens/DamageTypeScreen.tsx
 *  Syntax:     NA
 *  Synopsis:   Damage Type
 *  Notes:
 *  
 *  Revisions:
 *      04/16/2021  File Created
 *******************************************************************************
 */

import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import data from '../../contentConfig.json';
import utility from '../common/utility';
import images from '../assets/images/images';

import {
    DAMAGETYPE_LOADED,
    DAMAGETYPE_UPDATE_VALUE,
    DAMAGETYPE_ADDCHECKVALUE,
    DAMAGETYPE_REMOVECHECKVALUE
} from '../constants/actionTypesDamageType';

import {
    COMMON_UPDATE_VALUE,
    COMMON_STATETOCONSOLE,
    COMPONENT_UNLOAD
} from '../constants/actionTypesCommon';

import {create} from 'tailwind-rn';
import styles from '../../styles.json';

import { StyledText } from '../components/StyledText';
import { StyledButton } from '../components/StyledButton';
import { StyledCheckImage } from '../components/StyledCheckImage';

const {tailwind, getColor} = create(styles);

const mapStateToProps = state => ({
    ...state.DamageType,
    ...state.ReportType,
    masterState: state
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: DAMAGETYPE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: COMPONENT_UNLOAD }),
    onUpdateValue: (key, value) =>
        dispatch({ type: DAMAGETYPE_UPDATE_VALUE, key, value }),
    onAddChecklist: (value) =>
        dispatch({ type: DAMAGETYPE_ADDCHECKVALUE, value }),
    onRemoveChecklist: (value) =>
        dispatch({ type: DAMAGETYPE_REMOVECHECKVALUE, value }),
    onStateToConsole: () =>
        dispatch({ type: COMMON_STATETOCONSOLE })
});

export class DamageTypeScreen extends React.Component {
    constructor() {
        super();

        this.toggleItem = this.toggleItem.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.getScreen = this.getScreen.bind(this);
        this.handleStateToConsole = this.handleStateToConsole.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleItem(option) {
        if (this.props.checkedList.includes(option)) {
            this.props.onRemoveChecklist(option);
        } else {
            this.props.onAddChecklist(option);
        }
    }

    isChecked(option) {
        return this.props.checkedList.includes(option);
    }

    getScreen(screen) {
        const { navigate } = this.props.navigation;

        console.log("target:", screen);
        navigate(screen);
    }

    handleStateToConsole() {
        /* for viewing complete redux structure in console */
        console.log(this.props.masterState);
    }

    handleSubmit() {
        /* for viewing complete redux structure in console */
        console.log('selected items:', this.props.checkedList);
    }

    render() {
        const route = 'reporttype';
        const configSettings = utility.getNodeByRoute(data.routes, route);
        const reportTypes = configSettings[0].reporttypes;

        const reporttype = this.props.reporttype || 'powerpole';
        const damageSettings = utility.getNodeByValue(reportTypes, reporttype);
        const damageTypes = damageSettings[0].damagetypes;
        const content = utility.contentDictionary(damageSettings[0].content);
        const buttons = utility.buttonDictionary(damageSettings[0].buttons);

        const leftCol = 'pge-tw-mr-4 pge-tw-mb-4';
        const rightCol = 'pge-tw-mb-4';

        return (
            <SafeAreaView style={tailwind('pge-tw-flex-container-1 pge-tw-bg-white')}>
                <ScrollView>
                    <View style={tailwind('pge-tw-flex-container-1 pge-tw-p-8')}>
                        <StyledText textSize="header2" textAlign="left">{content["header1"]}</StyledText>
                        <StyledText textSize="normal" textAlign="left">{content["paragraph1"]}</StyledText>
                        <View style={{flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', padding: 0}} >
                            {
                                damageTypes.map((item, i) => {
                                    var twstyle = i % 2 == 0 ? leftCol : rightCol;
                                    return (
                                        <View key={i} style={[tailwind(twstyle), {width: 160, height: 170}]}>
                                            <StyledCheckImage appearance="damage" size="square" imageName={item.image} label={item.name} isChecked={this.isChecked(item.value)} onPress={() => this.toggleItem(item.value)} />
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <StyledCheckImage appearance="damage" size="other" imageName={''} label="Other" isChecked={this.isChecked('other')} onPress={() => this.toggleItem('other')} />

                        <StyledButton appearance="primary" size="full-width" label={buttons["submit"]} isDisabled={this.props.disabledSubmit} onPress={this.handleSubmit} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DamageTypeScreen);