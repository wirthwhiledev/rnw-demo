import 'react-native-gesture-handler';

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewAppScreen from "./app/pages/new-app-screen";
import ExampleOne from "./app/pages/my-page";

//App Versions
import App01 from "./app/_demo/01/App";
import App02 from "./app/_demo/02/App";
import App03 from "./app/_demo/03/App";

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

//export default App;

export default App03;