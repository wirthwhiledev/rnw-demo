import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import styles from './styles';


//1. Update the FlatLight and TextInput to do stuff
// onChangeText stuff, click event on button

//2 -> Talk about the Core Componets
// base components that compile to native counterparts during the building process

// add an activity indicator and show the difference between iOS android and windows
//  https://reactnative.dev/docs/activityindicator

//Additionally React Native has a big commmunity so it's easy to find other 3rd party components to leverage

//3 -> add font awesome
// npm install @fortawesome/react-native-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
// https://github.com/FortAwesome/react-native-fontawesome/tree/master

//Next Demo about Grander modules

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

function MyPage() {
    const [items, setItems] = useState([]);
    const [newItem, onChangeNewItem] = useState("");

    const addNewItemToList = () => {
        setItems([...items, { label: newItem }]);
        onChangeNewItem("");
    }

    return (
        <View style={styles.page}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <Text style={styles.h1}>Hello That Conference</Text>
                <FontAwesomeIcon icon={faTree} style={{ marginLeft: 10 }} size={20} color="#f74646" />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    onChangeText={text => onChangeNewItem(text)}
                    value={newItem}
                />

                <TouchableOpacity style={styles.button} onPress={addNewItemToList}>
                    <Text style={styles.buttonText}>Add to List</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.listHeader}>Super Cool Items ({items.length})</Text>
            <FlatList
                style={styles.list}
                data={items}
                renderItem={({ item }) => {
                    return (<View><Text>{item.label}</Text></View>)
                }}
            />

            <ActivityIndicator style={{ marginTop: 50 }} size={80} />

        </View>
    );
}


export default MyPage;
