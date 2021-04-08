/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerHelp.js
 *  Synopsis:   Reducers for Help
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    HELP_LOADED,
    HELP_UPDATE_VALUE,
    HELP_UPDATE_ARRAY,
    HELP_UNLOADED
} from '../constants/actionTypesHelp';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case HELP_LOADED:
            return {
                ...state
            }
        case HELP_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case HELP_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case HELP_UNLOADED:
            return {};
        default:
            return state;
    }
};
