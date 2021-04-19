/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerReportType.js
 *  Synopsis:   Reducers for Report Type
 *  Notes:
 *  
 *  Revisions:
 *      04/16/2021  File Created
 *******************************************************************************
 */

import {
    REPORTTYPE_LOADED,
    REPORTTYPE_UPDATE_VALUE,
    REPORTTYPE_UPDATE_ARRAY,
    REPORTTYPE_UNLOADED
} from '../constants/actionTypesReportType';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case REPORTTYPE_LOADED:
            return {
                ...state
            }
        case REPORTTYPE_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case REPORTTYPE_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case REPORTTYPE_UNLOADED:
            return {};
        default:
            return state;
    }
};
