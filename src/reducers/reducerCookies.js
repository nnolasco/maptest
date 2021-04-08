/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerCookies.js
 *  Synopsis:   Reducers for Cookies
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    COOKIES_LOADED,
    COOKIES_UPDATE_VALUE,
    COOKIES_UPDATE_ARRAY,
    COOKIES_UNLOADED
} from '../constants/actionTypesCookies';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case COOKIES_LOADED:
            return {
                ...state
            }
        case COOKIES_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case COOKIES_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case COOKIES_UNLOADED:
            return {};
        default:
            return state;
    }
};
