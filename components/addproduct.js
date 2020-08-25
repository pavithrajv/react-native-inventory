import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from "react-native";
import Axios from 'axios'

export default function AddProduct({ navigation }) {

    const [ProductCode, setProductCode] = useState('')
    const captureProductCode = (value) => {
        setProductCode(value)
        console.log(ProductCode);
    }

    const [ProductName, setProductName] = useState('')
    const captureProductName = (value) => {
        setProductName(value)
        console.log(ProductName)
    }
    const [ProductVendor, setProductVendor] = useState('')
    const captureProductVendor = (value) => {
        setProductVendor(value)
        console.log(ProductVendor)
    }

    const [ProductPrice, setProductPrice] = useState('')
    const captureProductPrice = (value) => {
        setProductPrice(value)
        console.log(ProductPrice)
    }

    const [ProductQuantity, setProductQuantity] = useState('')
    const captureProductQuantity = (value) => {
        setProductQuantity(value)
        console.log(ProductQuantity)
    }

    const [ProductManufacturer, setProductManufacturer]=useState('')
    const captureProductManufacturer=(value)=>{
        setProductManufacturer(value)
        console.log(ProductManufacturer)
    }

    const [ProductCategory, setProductCategory] = useState('Mobile');
    console.log(ProductCategory)

    const submitHandler = (ProductCode, ProductName, ProductCategory, ProductVendor,ProductManufacturer, ProductPrice, ProductQuantity) => {
        let product = {
            productCode: ProductCode,
            productName: ProductName,
            category: ProductCategory,
            vendor: ProductVendor,
            Manufacturer:ProductManufacturer,
            price: ProductPrice,
            quantity: ProductQuantity
        }
        console.log("product:", product)
        Axios.post('http://localhost:3000/allproducts', product).then(response => {
            console.log(response.data)
            navigation.navigate('ProductsList')
        })
    }

    return (
        <View>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add product code....'
                onChangeText={captureProductCode}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add product name...'
                onChangeText={captureProductName}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add vendor details'
                onChangeText={captureProductVendor}
            ></TextInput>
            <Text>Select category</Text>
            <Picker
                selectedValue={ProductCategory}
                style={{ display:"flex"}}
                onValueChange={(itemValue, itemIndex) => setProductCategory(itemValue)}
            >
                <Picker.Item label="Mobile" value="Mobile" />
                <Picker.Item label="Laptop" value="Laptop" />
                <Picker.Item label="Camera" value="Camera" />
                <Picker.Item label="Speaker" value="Speaker" />
                <Picker.Item label="Accesories" value="Accesories" />
                <Picker.Item label="Headphones" value="Headphones" />
            </Picker>
            <TextInput
                style={mystyles.inputFriend}
                placeholder="add product manufacturer"
                onChangeText={captureProductManufacturer}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add product price...'
                onChangeText={captureProductPrice}
                keyboardType='numeric'
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add product quantity...'
                onChangeText={captureProductQuantity}
                keyboardType='numeric'
            ></TextInput>

            <Button
                title="Add Product"
                onPress={() => submitHandler(ProductCode, ProductName, ProductCategory, ProductVendor,ProductManufacturer, ProductPrice, ProductQuantity)}
            />
        </View>
    )

}

const mystyles = StyleSheet.create({
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