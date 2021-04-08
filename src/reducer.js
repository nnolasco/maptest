/*
 *******************************************************************************
 *  Filename:   ./src/reducer.js
 *  Synopsis:   Reducers take dispatch results and apply them to the state.
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *******************************************************************************
 */

import { combineReducers } from 'redux';

import Common from './reducers/reducerCommon';
import Onboarding from './reducers/reducerOnboarding';

export default combineReducers({
    Common,
    Onboarding
});