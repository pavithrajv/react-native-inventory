import React from 'react';

import { View, StyleSheet } from 'react-native';

import ProductsList from './components/productsList';
import AddProduct from './components/addproduct';
import MyStackNavigator from './myroutes/stacknavigation';
import ProductDetails from './components/productDetails';
import EditProduct from './components/editproduct';



export default function App() {
  
  return (
    // <View style={mystyles.maincontainer}>
    //   <ProductsList></ProductsList>    
    //   <AddProduct></AddProduct>
    // </View>
      <MyStackNavigator></MyStackNavigator>
    
    
  )
}

const mystyles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'transparent',
    flex: 1,
    //alignItems:'center',
    //justifyContent:'center'
  }
})