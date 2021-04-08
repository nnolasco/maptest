/*
 *******************************************************************************
 *  Filename:   ./src/reducer.js
 *  Synopsis:   Reducers take dispatch results and apply them to the state.
 *  Notes:
 *  
 *  Revisions:
 *      04/07/2021  File Created
 *      04/08/2021  Added reducers for About, Cookies, Help, MyApp, MyReports,
 *                  NotFound, Notifications, and Report
 *******************************************************************************
 */

import { combineReducers } from 'redux';

import Common from './reducers/reducerCommon';
import Onboarding from './reducers/reducerOnboarding';
import Home from './reducers/reducerHome';
import About from './reducers/reducerAbout';
import Cookies from './reducers/reducerCookies';
import Help from './reducers/reducerHelp';
import MyApp from './reducers/reducerMyApp';
import MyReports from './reducers/reducerMyReports';
import NotFound from './reducers/reducerNotFound';
import Notifications from './reducers/reducerNotifications';
import Report from './reducers/reducerReport';

export default combineReducers({
    Common,
    Onboarding, Home, Report, NotFound, 
    MyApp, About, Cookies, Help, MyReports, Notifications
});