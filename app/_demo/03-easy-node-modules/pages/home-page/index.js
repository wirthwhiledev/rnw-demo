
//DEMO: Node Modules Basic
//Easy to add node modules that don't require linking Windows packages

//#1: React Native has a big commmunity so it's easy to find 3rd party components to leverage
// pdf readers
// webview (which i'll show in a bit)
// even more basic things like font awesome.

//#2 -> Adding and referecing Font Awesome
// npm install @fortawesome/react-native-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
// https://github.com/FortAwesome/react-native-fontawesome/tree/master

//-------

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


// CODE #1 - adding references to FA
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

            {/* CODE #2 - convert to a side by side and add icon */}

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
