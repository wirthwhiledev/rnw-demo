import React from 'react';
import {
    View,
    Text
} from "react-native";

function FancyPage() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#6b52ae" }}>
            <Text style={{ color: "#ffffff", fontSize: 30 }} >The worst thing about prison was the dementors.</Text>
        </View>
    )
}

export default FancyPage;