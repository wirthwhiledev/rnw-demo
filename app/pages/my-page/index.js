import React from 'react';
import "./styles";

import {
  View,
} from 'react-native';


function ExampleOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



export default ExampleOne;
