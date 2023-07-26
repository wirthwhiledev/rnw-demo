import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
} from 'react-native';

function MyPage() {
    const [items, setItems] = useState({label:"Do"}, {label:"Something"})
    return (
        <View>
            <Text>Hello That Conference</Text>

            <TextInput />
            <Button title='Do Something' />

            <Text>Super Cool Items ({items.length})</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (<View><Text>{item.label}</Text></View>)
                }}
            />

        </View>
    );
}


export default MyPage;
