import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomePage } from "./pages";

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HomePage />
        </SafeAreaView>
    );
};

export default App;
