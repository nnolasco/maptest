/*
 *******************************************************************************
 * 
 *  Filename:   ./Styles.js
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Global React Native Stylesheet
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Thursday, April 1, 2021 - 12:42 AM (CST)
 *  
 *  Notes:
 *  
 *  
 *  Revisions:
 *      04/01/2021  NJN     File Created
 *      
 *      
 *  Copyright (c) 2021 - PricewaterhouseCoopers - All Rights Reserved.
 *  Unauthorized copying of this file via any medium is strictly prohibited.
 *  Proprietary and Confidential.
 *
 *******************************************************************************
 */

import { StyleSheet } from 'react-native'; 

export default StyleSheet.create({
// General Formatting
    "container": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#fff"
    },
    "containerLeft": {
        "flex": 1,
        "alignItems": "flex-start",
        "justifyContent": "center",
        "backgroundColor": "#fff"
    },
    "sectiontitle": {
        "fontSize": 18,
        "fontWeight": "bold",
        "paddingTop": 30,
        "paddingLeft": 20,
        "paddingBottom": 5,
        "paddingRight": 20,
        "backgroundColor": "#FFFFFF",
        "color": "#333333"
    },
    "textCenter": {
        "fontSize": 16,
        "color": "#333333",
        "textAlign": "center",
        "padding": 20
    },
    "textLeft": {
        "fontSize": 16,
        "color": "#333333",
        "textAlign": "left",
        "padding": 20
    },
    "separator": {
        "marginVertical": 30,
        "borderBottomWidth": 1,
        "borderBottomColor": "#DDD",
        "width": "80%"
    },

// Form Inputs
    "inputLabel": {
        "fontSize": 16,
        "fontWeight": "bold",
        "color": "#333333",
        "textAlign": "left",
        "padding": 20
    },
    "input": {
        "color": "#0d527a",
        "borderColor": "#CCCCCC",
        "height": 60,
        "alignItems": "center",
        "borderRadius": 30,
        "marginLeft": 35,
        "marginRight": 35,
        "marginTop": 20,
        "marginBottom": 20,
        "paddingLeft": 20,
        "paddingRight": 20,
        "margin": 12,
        "borderWidth": 1,
        "width": "80%"
    },

// Buttons
    "buttonStyle": {
        "backgroundColor": "#fbba35",
        "borderWidth": 0,
        "color": "#0d527a",
        "borderColor": "#fbba35",
        "height": 60,
        "alignItems": "center",
        "borderRadius": 30,
        "marginLeft": 35,
        "marginRight": 35,
        "marginTop": 20,
        "marginBottom": 20,
        "width": "80%"
    },
    "buttonTextStyle": {
        "color": "#0d527a",
        "fontWeight": "bold",
        "paddingVertical": 18,
        "paddingHorizontal": 50,
        "fontSize": 16,
    },

// IntroScreen - Intro Slide Styles
    "slide": {
        "flex": 1,
        "alignItems": "center"
    },
    "slideImage": {
        "width": 320,
        "height": 320,
        "marginTop": 32
    },
    "slideTitle": {
        "fontSize": 36,
        "color": "#333333",
        "textAlign": "center"
    },
    "slideText": {
        "fontSize": 20,
        "color": "#333333",
        "textAlign": "center",
        "padding": 20
    },
    "dotStyle": {
        "backgroundColor": "rgba(13, 82, 122, .2)",
        "borderRadius": 10,
        "width": 15,
        "height": 15,
        "marginRight": 10,
        "marginLeft": 10
    },
    "activeDot": {
        "backgroundColor": "rgba(13, 82, 122, .9)",
        "borderRadius": 10,
        "width": 15,
        "height": 15,
        "marginRight": 10,
        "marginLeft": 10
    },
});