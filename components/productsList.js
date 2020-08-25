import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList, Button, Picker,TextInput } from 'react-native';
import axios from 'axios'

import Header from './header'
import AddProduct from './addproduct'
import MyStackNavigator from '../myroutes/stacknavigation'
import { globalstyles } from '../globalstyles/globalstyles'

export default function ProductsList({ navigation }) {

    
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/allproducts')
            .then(res => {
                setProducts(res.data)
            })

    })
    
    

    return (
        <View style={mystyles.maincontainer}>
            {/* <Header></Header> */}

            {/* <Picker
                selectedValue={ProductCategory}
                style={{ display: "flex" }}
                onValueChange={(itemValue, itemIndex) => setProductCategory(itemValue)}
            >
                <Picker.Item label="Mobile" value="Mobile" />
                <Picker.Item label="Laptop" value="Laptop" />
                <Picker.Item label="Camera" value="Camera" />
                <Picker.Item label="Speaker" value="Speaker" />
                <Picker.Item label="Accesories" value="Accesories" />
                <Picker.Item label="Headphones" value="Headphones" />
            </Picker> */}
            
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
        display:"flex"
    }
})