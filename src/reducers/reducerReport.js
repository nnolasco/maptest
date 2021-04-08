/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerReport.js
 *  Synopsis:   Reducers for Report
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    REPORT_LOADED,
    REPORT_UPDATE_VALUE,
    REPORT_UPDATE_ARRAY,
    REPORT_UNLOADED
} from '../constants/actionTypesReport';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case REPORT_LOADED:
            return {
                ...state
            }
        case REPORT_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case REPORT_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case REPORT_UNLOADED:
            return {};
        default:
            return state;
    }
};
