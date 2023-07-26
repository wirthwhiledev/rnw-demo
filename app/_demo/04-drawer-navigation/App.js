/*
npm install @react-navigation/native @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
*/

import 'react-native-gesture-handler';

import React from 'react';

import { HomePage, NewAppScreen } from "./pages";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

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
