import React from 'react';
import { SafeAreaView } from 'react-native';
import MyPage from "./pages/my-page";
import { Text } from 'react-native-svg';

const App = () => {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'yellow' }}>
            <MyPage />
            <Text style={{color:'black'}}>Hiya buddy</Text>
        </SafeAreaView>
    );
};

export default App;
