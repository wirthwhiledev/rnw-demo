import 'react-native-gesture-handler';

import React from 'react';

import { MyPage, NewAppScreen } from "./pages";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


//talk about adding some navigation
//official documentation suggest using a community library call react-navigation
//I'm partial to a drawer so let's add that
//https://reactnavigation.org/docs/drawer-based-navigation

//npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated 
//npm install @react-navigation/drawer

//update app.JS

//show the .SLN file and show that without me doing anything that some VS project references were added to the SLN
//(you'll likely need to run a nuget restore here but we don't have to)
//https://github.com/software-mansion/react-native-screens/tree/main/windows/RNScreens

//demo 4 -> debugging
// 4.1 can use simple debugger statements or console logs
// 4.2 can also install React Native Extension for VSCode (which I currently have disabled)
    // then you can  setup launch configurations in VSCode and debug inside of here

//go to next demo about native module building

const App = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MyPage} />
                <Drawer.Screen name="New App Page" component={NewAppScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
