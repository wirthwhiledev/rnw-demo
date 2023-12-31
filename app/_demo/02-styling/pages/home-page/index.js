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
    const [items, setItems] = useState([]);
    const [newItem, onChangeNewItem] = useState("");

    const addNewItemToList = () => {
        setItems([...items, { label: newItem }]);
        onChangeNewItem("");
    }

    return (
        <View style={styles.page}>
            <Text style={{...styles.h1, fontStyle:"italic"}}>Hello That Conference</Text>
            <View style={styles.form}>
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

        </View>
    );
}


export default MyPage;
