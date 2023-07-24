import 'react-native-gesture-handler';

import React from 'react';

import { HomePage, FancyPage } from "./pages";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Fancy Page" component={FancyPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
