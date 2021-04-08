/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerMyReports.js
 *  Synopsis:   Reducers for MyReports
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    MYREPORTS_LOADED,
    MYREPORTS_UPDATE_VALUE,
    MYREPORTS_UPDATE_ARRAY,
    MYREPORTS_UNLOADED
} from '../constants/actionTypesMyReports';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case MYREPORTS_LOADED:
            return {
                ...state
            }
        case MYREPORTS_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case MYREPORTS_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case MYREPORTS_UNLOADED:
            return {};
        default:
            return state;
    }
};
