import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { NewAppScreen } from "./app/new-app-screen";

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <NewAppScreen />
        </SafeAreaView>
    );
};

export default App;
