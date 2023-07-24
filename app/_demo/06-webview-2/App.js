import 'react-native-gesture-handler';

import React from 'react';

import { HomePage, WebviewPage, FancyPage } from "./pages";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Fancy Page" component={FancyPage} />
                <Drawer.Screen name="WebView Page" component={WebviewPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
