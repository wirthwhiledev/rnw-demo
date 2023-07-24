//DEMO: Core Components
//Quickly looking at core components vs HTML markup

//NOTE: no browswer to parse and render, HTML isn't a thing

// #1 - Update the FlatLight and TextInput to do stuff
//          onChangeText stuff, click event on button

// #2 - Talk about the Core Componets
//          base components that compile to native counterparts during the building process

//#3 - add an activity indicator and show the difference between iOS android and windows
//          https://reactnative.dev/docs/activityindicator

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import styles from './styles';

function MyPage() {

    //CODE #1 - adding logic 
    const [items, setItems] = useState([]);
    const [newItem, onChangeNewItem] = useState("");

    const addNewItemToList = () => {
        setItems([...items, { label: newItem }]);
        onChangeNewItem("");
    }

    return (
        <View style={styles.page}>
            <Text style={styles.h1}>Hello That Conference</Text>
            <View style={styles.form}>

                {/* CODE #2 - binding to buttons */}

                <TextInput style={styles.input}
                    onChangeText={text => onChangeNewItem(text)}
                    value={newItem} />

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

            {/* CODE #3 */}
            <ActivityIndicator style={{ marginTop: 50 }} size={80} />

        </View>
    );
}


export default MyPage;
