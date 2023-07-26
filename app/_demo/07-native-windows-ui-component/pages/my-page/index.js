import React, { useState } from 'react';
import {
    requireNativeComponent,
    View,
    Text,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

//let ACC = requireNativeComponent('AaronsCustomControl');


function MyPage() {
    const [items, setItems] = useState([]);
    const [newItem, onChangeNewItem] = useState("");

    const addNewItemToList = () => {
        setItems([...items, { label: newItem }]);
        onChangeNewItem("");
    }

    return (
        <View style={styles.page}>
            <ACC />
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <FontAwesomeIcon icon={faTree} style={{ marginRight: 10 }} size={40} color="#f74646" />
                <Text style={styles.h1}>Hello That Conference</Text>
                <FontAwesomeIcon icon={faTree} style={{ marginLeft: 10 }} size={40} color="#f74646" />
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
