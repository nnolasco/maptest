/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerMyApp.js
 *  Synopsis:   Reducers for MyApp
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    MYAPP_LOADED,
    MYAPP_UPDATE_VALUE,
    MYAPP_UPDATE_ARRAY,
    MYAPP_UNLOADED
} from '../constants/actionTypesMyApp';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case MYAPP_LOADED:
            return {
                ...state
            }
        case MYAPP_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case MYAPP_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case MYAPP_UNLOADED:
            return {};
        default:
            return state;
    }
};
