/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerJoinWaitlist.js
 *  Synopsis:   Reducers for Join Waitlist Screen
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    JOINWAITLIST_LOADED,
    JOINWAITLIST_UPDATE_VALUE,
    JOINWAITLIST_UPDATE_ARRAY,
    JOINWAITLIST_UNLOADED
} from '../constants/actionTypesJoinWaitlist';

const defaultState = {
    email: '',
    usertype: '',
    error: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case JOINWAITLIST_LOADED:
            return {
                ...state,
                errors: action.payload.error ? action.payload.error : '',
                email: action.payload.email ? action.payload.email : ''
            }
        case JOINWAITLIST_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case JOINWAITLIST_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case JOINWAITLIST_UNLOADED:
            return {};
        default:
            return state;
    }
};
