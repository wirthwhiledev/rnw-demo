import React from 'react';
import {
    View,
    Text
} from "react-native";

//import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient-latest';

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