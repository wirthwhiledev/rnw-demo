// problem with most recent version so had to revert to 12.0.2 instead of the latest 13.0
//

import React from 'react';
import {
    View,
    Text
} from "react-native";

import LinearGradient from 'react-native-linear-gradient-latest';

//1. going to need to run a nuget restore because there is a linked nuget package 
    // nuget restore .\windows\rnwDemo.sln
function FancyPage() {

    return (
        <LinearGradient colors={['#6b52ae', '#403168', '#352957']} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#ffffff", fontSize: 30 }} >The worst thing about prison was the dementors.</Text>
            </View>
        </LinearGradient>

    )
}

export default FancyPage;