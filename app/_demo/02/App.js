import React from 'react';
import { SafeAreaView } from 'react-native';
import MyPage from "./pages/my-page";

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyPage />
        </SafeAreaView>
    );
};

export default App;
