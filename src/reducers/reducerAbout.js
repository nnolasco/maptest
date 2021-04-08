/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerAbout.js
 *  Synopsis:   Reducers for About
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    ABOUT_LOADED,
    ABOUT_UPDATE_VALUE,
    ABOUT_UPDATE_ARRAY,
    ABOUT_UNLOADED
} from '../constants/actionTypesAbout';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ABOUT_LOADED:
            return {
                ...state
            }
        case ABOUT_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case ABOUT_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case ABOUT_UNLOADED:
            return {};
        default:
            return state;
    }
};
