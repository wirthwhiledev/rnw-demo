import React, { useState } from 'react';
import { Text, TouchableOpacity } from "react-native";

function BetterButton({ label, onPress }) {

    const styles = {
        wrapper: {
            display: "flex",
            justifyContent: 'center',
            color: "white",
            backgroundColor: '#3f899f',
            paddingHorizontal: 10,
            borderRadius: 6,
            height: 40
        },
        label: {
            color: "white"
        }
    }

    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress} >
            <Text style={styles.label} >{label}</Text>
        </TouchableOpacity>
    )
}

export default BetterButton;