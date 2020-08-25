import { StyleSheet } from "react-native";


export const globalstyles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    containerStyle:{
        padding: 20,
        flex:1
    },
    touchButtonContainer:{
        backgroundColor: '#aaddee',
        padding:10,
        margin:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        width:120
    }
})