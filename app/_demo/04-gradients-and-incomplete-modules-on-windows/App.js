import 'react-native-gesture-handler';

import React from 'react';

import { MyPage, FancyPage } from "./pages";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Fancy Page">
                <Drawer.Screen name="Home" component={MyPage} />
                <Drawer.Screen name="Fancy Page" component={FancyPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
