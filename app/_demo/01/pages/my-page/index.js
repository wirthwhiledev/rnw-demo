import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import styles from './styles';


//1 -> build the page with just Hello World Text
//1.5 -> add a text input, button, virtualized list
//2 -> add some styling
// talk about styling, React StyleSheet 
// talk about lots of other options for styling that allow even more of a CSS like feel

//move to second demo

function MyPage() {
    const [items, setItems] = useState([{ label: "hello" }, { label: "world" }]);

    return (
        <View style={styles.page}>
            <Text style={styles.h1}>Hello World</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Do Something</Text>
                </TouchableOpacity>

                {/*
                <Button title='Do Something' />
                */}
            </View>

            <Text style={styles.listHeader}>Super Cool Items</Text>
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
