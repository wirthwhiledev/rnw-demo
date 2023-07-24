//DEMO: Adding navigation - another node_module except now with a linked nuget package

// #1 - Many different providers for navigation if you don't want to roll your own
//      react-navigation - https://reactnavigation.org/docs/drawer-based-navigation
//      Going to add a drawer style navgation

// #2 - Install 5 different packages
//npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated 
//npm install @react-navigation/drawer

// #3 -  SLN updates
//      Notice there was an addition to our .SLN file
//      Image of restore request - Those additions will require an Nuget Package restore (use command line or Visual Studio) 

//go to next demo about Modules that just haven't updated yet... adding a gradient

// CODE #1
import 'react-native-gesture-handler';

import React from 'react';

import { HomePage, NewAppScreen } from "./pages";

// CODE #2
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

    //CODE #3
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="New App Page" component={NewAppScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
