// #1 - Building some Hello That Conference Title Text

// #2 - Add a text input, button, virtualized list

// #3 - add some styling
//      talk about styling, React StyleSheet, 
//      other versions of styling like styled-componets (3rd party) - https://blog.logrocket.com/using-styled-components-with-react-native/

// #4 - change from button to TouchableOpacity

//CHANGES TO APP.JS FIRST

import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

function MyPage() {
    const [items, setItems] = useState([{ label: "hello" }, { label: "world" }]);

    return (
        <View style={styles.page}>
            <Text style={styles.h1}>Hello That Conference</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Do Something</Text>
                </TouchableOpacity>

                {/*

                <Button title='Do Something' />
                
                */}
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
