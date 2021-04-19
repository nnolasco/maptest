## Atomic Styling Structure

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

  - [Read more about it here](https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving)
  - [Here's a quick video explanation of Atomic Design](https://youtu.be/q5CB1za0NfA)

## App's Styling Structure

- Theme - Contains ionic style overrides and global stylings.
  - Atoms
    - Button- Modular styling for buttons used throughout the app.
    - Color- Contains color variables and color gradients.
    - Forms- Holds styling for forms, input fields, styles for login form and more.
    - Layout- Has wrappers, layout elements, cards and many more layout stylings.
    - Typography- Contains custom font faces, default font overrides and text-sizing.
  - Variables- Holds the main imports for the app and variables.

### Design Tokens

The project leverages [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to define Design Tokens.
* Tokens can be find within the ```src/styles/properties``` folder
* Run the ```npm run tokens``` command to generate tokens at any point. Note that this command will run automatically whenever the run develop command is used.
* Tokens will be generated as a set of CSS variables that can be leveraged by Tailwind

### Tailwind

[Tailwind](https://tailwindcss.com) is a utility-first CSS framework for rapidly building custom user interfaces.
The project includes a set of [React / Tailwind components](https://emortlock.github.io/tailwind-react-ui/#documentation)
**[Tailwind CheatSheet](https://nerdcave.com/tailwind-cheat-sheet)**

## UsingTailwind for Expo

* Import tailwind-rn module and use any of the supported utilities from Tailwind CSS in your React Native views. ```import tailwind from 'tailwind-rn';```
* Call tailwind: tailwind function returns a simple object with styles, which can be used in any React Native view, such as <View>, <Text> and others. For example: 
```js
<SafeAreaView style={tailwind('pt-12 items-center')}>
//=> {
//     paddingTop: 48,
//     alignItems: 'center'
//   }
```
### Storybook

The project leverages [Storybook](https://storybook.js.org/) a user interface development environment and playground for UI components.
Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app-specific dependencies and requirements.

* Stories can be find within the ```src/stories``` folder
* Run the ```npm run storybook``` command to generate the storybook library.
* Storybook will open the [PG&E Design System](http://localhost:9009/?path=/story/background--colors)
* Run ``` npm run build:storybook``` command to build the storybook library. The output folder is /storybook-static/
* Run ``` npx http-server .out``` command to see the static storybook on the browser, the terminal will print out the url in which it is available
* Run ``` npm run deploy-storybook -- --out=.out``` command to deploy your storybook as a static site on git. The output folder is /storybook-static/index.html

## App's Dev/Code Structure

### /src Folder Structure
- src
  - assets - Folder containing font and image assets including image catalog code.
  - common - Folder containing shared components such as utility functions.
  - components - Folder containing shared components.
  - constants - Folder containing default constants. This contains the dispatch action constants used by Redux. Each screen has its own dispatch action constants definition file.
  - environments -
  - hooks - Folder containing React Native Hooks components.
  - navigation - Folder containing application Navigation components.
  - reducers - Folder containing Redux reducers. Each screen has its own reducer component.
  - screens - Folder will contain all the screens created on the app that users will interact with.

- src/reducer.js - This is the component that combines all reducers. This helps create Redux's immutable application state.

### ./myAppConfig.json Formatting

These are the list items for the MyAppScreen component.

      type:       header = section header text
                  item = list item
      
      name:       label for item in list
      
      iconType:   icon set: posssible values for React Native Icon Sets can be
                  found here: https://reactnativeelements.com/docs/icon/
      
      icon:       icon name: for each icon set, icons that can be used can be 
                  searched here: https://oblador.github.io/react-native-vector-icons/
      
      screen:     target screen when item is selected. These can be found
                  under ./src/screens

      link:       target URL when an item (like Privacy Policy) needs to link to an
                  online web page

## ./src/assets/images/images.js Formatting

Images that are included in the build to be used in the app must be added to a master image catalog. The images are organized by icons or graphics. The paths are relative to the ./src/assets/images/ directory.

```js
const images = {
    "icons": {
        "default": require('./icon.png')
    },
    "graphics": {
        "onboard1": require('./onboard1.png'),
        "onboard2": require('./onboard2.png')
    }
};
```

These images can be included in screens by importing the following at the top of the component:
```js
import { Image } from 'react-native';
import images from '../assets/images/images';
```
These can be included on the page by accessing the array. For example, to get the './onboard1.png' image from the catalog:
```js
var sampleImage = images.graphics["onboard1"];
```
This can be included in the React render function:
```html
<Image source={sampleImage} />
```