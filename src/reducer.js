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
 *      04/14/2021  Added Email, Join Waitlist, Join Waitlist Confirm
 *      04/16/2021  Added Report Type
 *******************************************************************************
 */

import { combineReducers } from 'redux';

import Common from './reducers/reducerCommon';
import Onboarding from './reducers/reducerOnboarding';
import Email from './reducers/reducerEmail';
import JoinWaitlist from './reducers/reducerJoinWaitlist';
import Home from './reducers/reducerHome';
import About from './reducers/reducerAbout';
import Cookies from './reducers/reducerCookies';
import Help from './reducers/reducerHelp';
import MyApp from './reducers/reducerMyApp';
import MyReports from './reducers/reducerMyReports';
import NotFound from './reducers/reducerNotFound';
import Notifications from './reducers/reducerNotifications';
import Report from './reducers/reducerReport';
import ReportType from './reducers/reducerReportType';
import DamageType from './reducers/reducerDamageType';

export default combineReducers({
    Common,
    Onboarding, Email, JoinWaitlist, Home, Report, ReportType, DamageType, NotFound, 
    MyApp, About, Cookies, Help, MyReports, Notifications
});