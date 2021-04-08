/*
 *******************************************************************************
 *  Filename:   ./src/reducers/reducerNotifications.js
 *  Synopsis:   Reducers for Notifications
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import {
    NOTIFICATIONS_LOADED,
    NOTIFICATIONS_UPDATE_VALUE,
    NOTIFICATIONS_UPDATE_ARRAY,
    NOTIFICATIONS_UNLOADED
} from '../constants/actionTypesNotifications';

const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NOTIFICATIONS_LOADED:
            return {
                ...state
            }
        case NOTIFICATIONS_UPDATE_VALUE:
            return {
                ...state,
                [action.key]: action.value ? action.value : '',
            }
        case NOTIFICATIONS_UPDATE_ARRAY:
            return {
                ...state,
                [action.key]: action.payload ? action.payload : []
            }
        case NOTIFICATIONS_UNLOADED:
            return {};
        default:
            return state;
    }
};
