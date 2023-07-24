import { StyleSheet } from "react-native";

//Talk about styles?
//https://reactnative.dev/docs/

export default StyleSheet.create({

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "10%",
        paddingVertical: 25,
        h1: {
            flex: 1,
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center"
        }
    },
    webviewContainer: {
        padding: 20,
        borderColor: "black",
        borderWidth: 1,
        flex: 1,
    }
});