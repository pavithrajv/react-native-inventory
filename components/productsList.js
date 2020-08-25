import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList, Button, Picker,TextInput } from 'react-native';
import axios from 'axios'

import Header from './header'
import AddProduct from './addproduct'
import MyStackNavigator from '../myroutes/stacknavigation'
import { globalstyles } from '../globalstyles/globalstyles'
import { useIsFocused } from '@react-navigation/native';

export default function ProductsList({ navigation }) {

    const focused=useIsFocused()
    const [products, setProducts] = useState([])
    const [searchList,setSearchList] = useState([])
    // const [searchList,setSearch] = useState([])
    
   const getAllProducts=() => {
        axios.get('http://localhost:3000/allproducts')
            .then(res => {
                setProducts(res.data)
                setSearchList(res.data)
            })

    }
    useEffect(()=>{
        getAllProducts()
    },[focused])
    
    const searchValue=(value)=>{
        let searchV=searchList.filter(s=>{
            return s.productName.toLowerCase().match(value.toLowerCase().trim())
        })
        setProducts(searchV)
    }

    return (
        <View style={mystyles.maincontainer}>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='search for product....'
                onChangeText={searchValue}
            ></TextInput>
            
            <FlatList
                //numColumns={2}
                keyExtractor={item => item.id}
                data={products}
                renderItem={(f) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate(name = 'ProductDetails', { item: f }) }} >
                            <Text style={mystyles.listitem}>{f.item.productName}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                onPress={() => { navigation.navigate('AddProduct') }}      >
                <Text>Add Product</Text>
            </TouchableOpacity>

        </View>
    )
}

const mystyles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'transparent',
        flex: 1,
        //alignItems:'center',
        //justifyContent:'center'
    },
    listitem: {
        marginTop: 20,
        fontSize: 30,
        backgroundColor: '#fff',
        //borderColor: " 2 px solid #777",
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
        color: 'purple',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#aaddee',
        shadowOpacity: 0.3,
        shadowRadius: 2

    },
    inputFriend: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 20,
        display:"flex",
        marginTop:10
    }
})