/*
 *******************************************************************************
 * 
 *  Filename:   ./src/assets/images/images.js
 *
 *  Syntax:     NA
 *
 *  Synopsis:   Image catalog for local application graphics.
 *  
 *  Author:     Norman J. Nolasco [ PWC ]
 *  
 *  Created:    Friday, April 2, 2021 - 8:51 PM (CST)
 *  
 *  Notes:
 *      04/02/2021  NJN     React Native does not allow variables in the parameter for
 *                          the require() function. Solution is to assign required
 *                          image to a JSON object. This preloads all graphics in one
 *                          place. By importing images.js, these graphics can be used
 *                          by referencing these JSON objects.
 *      
 *      
 *  Revisions:
 *      04/02/2021  NJN     File Created
 *      
 *      
 *  Copyright (c) 2021 - PricewaterhouseCoopers - All Rights Reserved.
 *  Unauthorized copying of this file via any medium is strictly prohibited.
 *  Proprietary and Confidential.
 *
 *******************************************************************************
 */

const images = {
    "icons": {
        "default": require('./icon.png'),
        "hiw1": require('./icon-hiw-1.png'),
        "hiw2": require('./icon-hiw-2.png'),
        "hiw3": require('./icon-hiw-3.png'),
        "requipment": require('./icon-equipment.png'),
        "rother": require('./icon-other.png'),
        "rpowerline": require('./icon-powerline.png'),
        "rpowerpole": require('./icon-powerpole.png'),
        "rtreevine": require('./icon-treevine.png'),
    },
    "graphics": {
        "onboardbg": require('./pic-background.png'),
        "onboard1": require('./pic-onboard-1.png'),
        "onboard2": require('./pic-onboard-2.png'),
        "onboard3": require('./pic-onboard-3.png'),
        "onboard4": require('./pic-onboard-4.png'),
        "about1": require('./about-1.png'),
    }
};

export default images;