import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import styles from "./styles";


export default function Header({ navigation, ...props }) {

    console.log(props);

    const onCoffeeButtonPressed = () => {
        console.log("hi!", navigation)
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onCoffeeButtonPressed} >
                <FontAwesomeIcon size={24} icon={faMugSaucer} />
            </TouchableOpacity>
        </View>
    )
}