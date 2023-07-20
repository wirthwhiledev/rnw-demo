import { StyleSheet } from "react-native";

//Talk about styles?
//https://reactnative.dev/docs/

export default StyleSheet.create({
    page: {
        paddingTop: 32,
        paddingHorizontal: 24,
        alignItems:"flex-start"
    },
    h1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    form: {
        flexDirection: "row",
        marginBottom:20,
    },
    input: {
        width: 300,
        height:40,
        borderWidth: 1,
        borderColor: "#bbbbbb",
        backgroundColor: "transparent",
        borderRadius: 6,
        marginRight:25,
        paddingVertical:9,
        paddingLeft:10,
    },
    button: {
        display:"flex",
        justifyContent:'center',
        color:"white",
        backgroundColor:'#3f899f',
        paddingHorizontal:10,
        borderRadius:6,
        height:40
    },
    buttonText:{
        color:"white",
        fontSize:16,
        padding:0,
    },
    listHeader:{
        textDecorationLine:"underline",
        fontStyle:"italic",
        fontSize:16,
        marginBottom:5
    },  
    list:{
        width:425,
        minHeight:50,
        maxHeight:200,
    }
});