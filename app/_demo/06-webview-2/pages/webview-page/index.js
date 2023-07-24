//DEMO: Adding a very complicated module but also very cool
//      This thing is a doozy to get installed but it's worth it
//      It's also a great example of why working with RNW right now can be a pain.

// #1 - Warning that you need to install a nuget package again - that's easy

// #2 - More complicated warnings about conflicting windows versions
//      Webview uses Xaml 2.7 but the rest of the app uses version 2.8
//      It's possible to change Webview so it references 2.8 but this causes a lot of things to spiral

// #3 - Updating a bunch of packages min version
//      You then need to go explicitly update the minimum version of the app so it's at LEAST 17763
//      You also need to explicitly update the min version of all a bunch of packages so they are at LEAST 17763
//      The way we decided to do this was to create a post install script (there are better ways but we wanted to be explicit)
//      ALL CREDIT GOES TO JOSE AVILA

// #4 - Now the build will run... after a solution clean and rebuild

// #5 - Through the pain
//      After all that you will be able to leverage WebView 2.0 in the app which is chromium based and 
//      MUCH better than what used to exist in UWP -  thanks WindowsSDK


// # This also illustrates a pretty good bug with yet another RNW module: https://github.com/microsoft/react-native-windows/issues/11094

import React, { useState, useRef } from 'react';
import { View, Text } from "react-native";
import { BetterButton } from '../../components';
import styles from "./styles";
import WebView from 'react-native-webview';

function WebViewPage() {
    const DEFAULT_PAGE = "https://reactnative.dev/";

    const [source, setSource] = useState("");

    const openPage = (newSource) => {
        setSource(newSource);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <BetterButton label="Open React Native Page" onPress={openPage.bind(null, DEFAULT_PAGE)} />
                <Text style={styles.header.h1} >WebView test....but better</Text>
                <BetterButton label="Open ThreeJS Page" onPress={openPage.bind(null, "https://threejs.org/examples/#webgl_geometry_teapot")} />
            </View>
            <Text>current: {source}</Text>
            <View style={styles.webviewContainer}>
                <WebView source={{ uri: source }} style={{ flex: 1 }} />
            </View>

        </View>

    )
}

export default WebViewPage;