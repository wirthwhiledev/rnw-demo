//Basic Setup and Core Components

// #1 - Building some Hello That Conference Title Text

// #2 Talk about core components
//          base components that compile to native counterparts during the building process
//          SLIDE

//#2.5 - add an activity indicator and show the difference between iOS android and windows
//          https://reactnative.dev/docs/activityindicator

// #3 - Add a text input, button, virtualized list

//CHANGES TO APP.JS FIRST

import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
} from 'react-native';

function MyPage() {
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
