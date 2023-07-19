import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewAppScreen from "./app/pages/new-app-screen";
import ExampleOne from "./app/pages/example-1";

const Drawer = createDrawerNavigator();


const App = () => {
    return (
    
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={NewAppScreen} />
                    <Drawer.Screen name="Basic Page" component={ExampleOne} />
                </Drawer.Navigator>
            </NavigationContainer>
    );
};

export default App;
