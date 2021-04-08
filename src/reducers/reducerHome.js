/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerHome.js
 *  Synopsis:   Reducers for Home
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    HOME_LOADED,
    HOME_UPDATE_VALUE,
    HOME_UPDATE_ARRAY,
    HOME_UNLOADED
} from '../constants/actionTypesHome';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case HOME_LOADED:
            return {
                ...state
            }
        case HOME_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case HOME_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case HOME_UNLOADED:
            return {};
        default:
            return state;
    }
};
