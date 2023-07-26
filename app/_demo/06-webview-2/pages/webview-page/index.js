import React, { useState } from 'react';
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
            <View style={styles.webviewContainer}>
                <WebView useWebView2={true} source={{ uri: source }} style={{ flex: 1 }} />
            </View>
            <Text style={{ position: "absolute", bottom: 0, left: 0, width:"100%"}} >current source: {source}</Text>
        </View>

    )
}

export default WebViewPage;