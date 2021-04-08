/*
 *******************************************************************************
 * 
 *  Filename:   ./reducers/reducerCommon.js
 *  Synopsis:   Reducers common to all components.
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021     File Created
 *******************************************************************************
 */

import {
    APP_LOAD,
    REDIRECT,
    COMMON_UPDATE_VALUE,
    COMPONENT_LOAD,
    COMPONENT_UNLOAD,
    LOGOUT
} from '../constants/actionTypesCommon';

const defaultState = {
    appName: 'PG&E Safety Issue Reporting System',
    token: null,
    appLoaded: false,
    currentEmail: '',
    currentUserType: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentEmail: action.payload ? action.payload.email : null,
                currentUserType: action.payload ? action.payload.usertype : null,
            };

        case REDIRECT:
            return {
                ...state,
                redirectTo: null
            };

        case COMMON_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value
            };

        case LOGOUT:
            return {
                ...state,
                redirectTo: '/',
                token: null,
                currentEmail: null,
                currentUserType: null
            };

        case COMPONENT_LOAD:
            return {
                ...state
            }; 

        case COMPONENT_UNLOAD:
            return {
                ...state
            };

        default:
            return state;
    }
};
