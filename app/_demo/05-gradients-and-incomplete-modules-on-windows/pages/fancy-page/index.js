//DEMO: Adding a module that was incomplete on Windows until recently
//      PR that actually allows children and styles to the LinearGradient...these were essential so they were not able to be added
//      //https://github.com/react-native-linear-gradient/react-native-linear-gradient/commit/d449d1f58405f6ec89e4e837cb899e1197a9d6f8
//      Takeway - just be ready to fork a PR 

// #1 - Another module that requires a nuget restore

// #2 


import React from 'react';
import {
    View,
    Text
} from "react-native";

//import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient-latest';

// CODE #1 : Add the Linear Gradient
// CODE #2 : Swap in the good library

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