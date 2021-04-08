/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerNotFound.js
 *  Synopsis:   Reducers for NotFound
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    NOTFOUND_LOADED,
    NOTFOUND_UPDATE_VALUE,
    NOTFOUND_UPDATE_ARRAY,
    NOTFOUND_UNLOADED
} from '../constants/actionTypesNotFound';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NOTFOUND_LOADED:
            return {
                ...state
            }
        case NOTFOUND_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case NOTFOUND_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case NOTFOUND_UNLOADED:
            return {};
        default:
            return state;
    }
};
