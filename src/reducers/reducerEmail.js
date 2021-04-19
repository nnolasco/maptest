/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerEmail.js
 *  Synopsis:   Reducers for Email Screen
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    EMAIL_LOADED,
    EMAIL_UPDATE_VALUE,
    EMAIL_UPDATE_ARRAY,
    EMAIL_UNLOADED
} from '../constants/actionTypesEmail';

const defaultState = {
    email: '',
    usertype: '',
    error: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case EMAIL_LOADED:
            return {
                ...state,
                errors: action.payload.error ? action.payload.error : '',
                email: action.payload.email ? action.payload.email : ''
            }
        case EMAIL_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case EMAIL_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case EMAIL_UNLOADED:
            return {};
        default:
            return state;
    }
};
