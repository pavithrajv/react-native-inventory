import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from "react-native";
import Axios from 'axios'
export default function EditProduct(navigation) {
    console.log(navigation)
    const detail=navigation.route.params.item
    console.log(detail)
    const Pid=detail.id
    const [ProductCode, setProductCode] = useState(detail.productCode)
    const captureProductCode = (value) => {
        setProductCode(value)
        console.log(ProductCode);
    }

    const [ProductName, setProductName] = useState(detail.productName)
    const captureProductName = (value) => {
        setProductName(value)
        console.log(ProductName)
    }
    const [ProductVendor, setProductVendor] = useState(detail.vendor)
    const captureProductVendor = (value) => {
        setProductVendor(value)
        console.log(ProductVendor)
    }

    const [ProductPrice, setProductPrice] = useState(detail.price)
    const captureProductPrice = (value) => {
        setProductPrice(value)
        console.log(ProductPrice)
    }

    const [ProductQuantity, setProductQuantity] = useState(detail.quantity)
    const captureProductQuantity = (value) => {
        setProductQuantity(value)
        console.log(ProductQuantity)
    }

    const [ProductManufacturer, setProductManufacturer]=useState(detail.Manufacturer)
    const captureProductManufacturer=(value)=>{
        setProductManufacturer(value)
        console.log(ProductManufacturer)
    }

    const [ProductCategory, setProductCategory] = useState(detail.category);
    console.log(ProductCategory)

    const submitHandler = (ProductCode, ProductName, ProductCategory, ProductVendor,ProductManufacturer, ProductPrice, ProductQuantity) => {
        let product = {
            id:detail.id,
            productCode: ProductCode,
            productName: ProductName,
            category: ProductCategory,
            vendor: ProductVendor,
            Manufacturer:ProductManufacturer,
            price: ProductPrice,
            quantity: ProductQuantity
        }
        console.log("product:", product)
        Axios.put('http://localhost:3004/allproducts/'+detail.id, product).then(response => {
            console.log(response.data)
           navigation.navigation.navigate('ProductsList')
            
        })
    }

    return (
        <View>
            <Text>Edit Product!!!!!!</Text>
            <TextInput
                style={mystyles.inputFriend}
                value={ProductCode}
                onChangeText={captureProductCode}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                value={ProductName}
                onChangeText={captureProductName}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                value={ProductVendor}
                onChangeText={captureProductVendor}
            ></TextInput>
            <Text>Select category</Text>
            <Picker
                selectedValue={ProductCategory}
                style={{ display:"flex" }}
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
                value={ProductManufacturer}
                onChangeText={captureProductManufacturer}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                value={ProductPrice}
                onChangeText={captureProductPrice}
                keyboardType='numeric'
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                value={ProductQuantity}
                onChangeText={captureProductQuantity}
                keyboardType='numeric'
            ></TextInput>

            <Button
                title="Update Product"
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