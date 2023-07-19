import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

import "./styles";

//1 -> build the page 
//2 -> add some styling
//3 -> add font awesome

function MyPage() {
    return (
        <View style={{ backgroundColor:'red'}}>
            <Text>Hello World</Text>
        </View>
    );
}


export default MyPage;
