/*
 *******************************************************************************
 * 
 *  Filename:   ./common/utility.js
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Common utility functions.
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Thursday, April 1, 2021 - 12:42 AM (CST)
 *  
 *  Notes:
 *      getNodeByRoute(routeArray, routeName) - returns JSON route structure from contentConfig.json for given routeName
 *      
 *      getNodeByButton(buttonArray, buttonName) - returns JSON button structure from contentConfig.json for given buttonName
 *      
 *      buttonDictionary(buttonArray) - returns dictionary of button text values where button names are keys. ex buttons["next"] = "Next Button Text"
 *  
 *      contentDictionary(contentArray) - returns dictionary of content text values where content names are keys. ex content["header1"] = "Section Header"
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

export default {
    getNodeByRoute: (routeArray, routeName) => routeArray.filter(function (routeArray) { return routeArray.route == routeName; }),

    getNodeByButton: (buttonArray, buttonName) => buttonArray.filter(function (buttonArray) { return buttonArray.name == buttonName; }),

    buttonDictionary(buttonArray) {
        var outputArray = [];

        for (var i = 0; i < buttonArray.length; i++) {
            outputArray[buttonArray[i].name] = buttonArray[i].text;
        }
        return outputArray;
    }, 

    contentDictionary(contentArray) {
        var outputArray = [];

        for (var i = 0; i < contentArray.length; i++) {
            outputArray[contentArray[i].name] = contentArray[i].text;
        }
        return outputArray;
    }, 
};