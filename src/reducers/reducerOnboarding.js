/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerOnboarding.js
 *  Synopsis:   Reducers for Onboarding Screens (Intro, Email)
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    ONBOARDING_LOADED,
    ONBOARDING_UPDATE_VALUE,
    ONBOARDING_UPDATE_ARRAY,
    ONBOARDING_UNLOADED
} from '../constants/actionTypesOnboarding';

const defaultState = {
    email: '',
    usertype: '',
    error: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ONBOARDING_LOADED:
            return {
                ...state,
                errors: action.payload.error ? action.payload.error : '',
                email: action.payload.email ? action.payload.email : ''
            }
        case ONBOARDING_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case ONBOARDING_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case ONBOARDING_UNLOADED:
            return {};
        default:
            return state;
    }
};
