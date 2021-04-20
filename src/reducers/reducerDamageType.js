/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerDamageType.js
 *  Synopsis:   Reducers for Damage Type
 *  Notes:
 *  
 *  Revisions:
 *      04/16/2021  File Created
 *******************************************************************************
 */

import {
    DAMAGETYPE_LOADED,
    DAMAGETYPE_UPDATE_VALUE,
    DAMAGETYPE_UPDATE_ARRAY,
    DAMAGETYPE_ADDCHECKVALUE,
    DAMAGETYPE_REMOVECHECKVALUE,
    DAMAGETYPE_UNLOADED
} from '../constants/actionTypesDamageType';

const defaultState = {
    checkedList: [],
    disabledSubmit: true
};

export default (state = defaultState, action) => {
    var newArray = [];
    var newDisabled = true;

    switch (action.type) {
        case DAMAGETYPE_LOADED:
            return {
                ...state
            }
        case DAMAGETYPE_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : ''
            }
        case DAMAGETYPE_ADDCHECKVALUE:
            newArray = [...state.checkedList];
            newArray.push(action.value);
            newDisabled = newArray.length == 0 ? true : false;
            return {
                ...state,
                checkedList: newArray,
                disabledSubmit: newDisabled
            }
        case DAMAGETYPE_REMOVECHECKVALUE:
            newArray = [...state.checkedList];
            newArray.splice(newArray.findIndex(y => y == action.value), 1)
            newDisabled = newArray.length == 0 ? true : false;
            return {
                ...state,
                checkedList: newArray,
                disabledSubmit: newDisabled
            }
        case DAMAGETYPE_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case DAMAGETYPE_UNLOADED:
            return {};
        default:
            return state;
    }
};
