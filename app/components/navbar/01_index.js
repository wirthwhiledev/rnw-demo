import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import styles from "./styles";

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('hi')} >
                <FontAwesomeIcon size={24} icon={faMugSaucer} />
            </TouchableOpacity>
        </View>
    )
}