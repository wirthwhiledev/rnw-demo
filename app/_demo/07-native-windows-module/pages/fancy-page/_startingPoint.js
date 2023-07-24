import React from 'react';
import {
    View,
    Text
} from "react-native";


//PR that actually allows children and styles to the LinearGradient...these were essential so they were not able to be added
//https://github.com/react-native-linear-gradient/react-native-linear-gradient/commit/d449d1f58405f6ec89e4e837cb899e1197a9d6f8

function FancyPage() {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#6b52ae" }}>
            <Text style={{ color: "#ffffff", fontSize: 30 }} >The worst thing about prison was the dementors.</Text>
        </View>
    )
}

export default FancyPage;