//DEMO: Adding a module that was incomplete on Windows until recently
//      Just be ready to fork a PR 

// #1 - 

// #2 - Install 5 different packages
//npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated 
//npm install @react-navigation/drawer

// #3 -  SLN updates
//      Notice there was an addition to our .SLN file
//      Image of restore request - Those additions will require an Nuget Package restore (use command line or Visual Studio) 

//go to next demo about Modules that just haven't updated yet... adding a gradient


import React from 'react';
import {
    View,
    Text
} from "react-native";

import LinearGradient from 'react-native-linear-gradient-latest';

// nuget restore .\windows\rnwDemo.sln

//PR that actually allows children and styles to the LinearGradient...these were essential so they were not able to be added
//https://github.com/react-native-linear-gradient/react-native-linear-gradient/commit/d449d1f58405f6ec89e4e837cb899e1197a9d6f8

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