import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import AddProduct from '../components/addproduct';
import ProductsList from '../components/productsList';
import { NavigationContainer } from "@react-navigation/native";
import Header from '../components/header';
import ProductDetails from '../components/productDetails';
import EditProduct from '../components/editproduct';
const Stack = createStackNavigator()

export default function MyStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ProductsList'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#ade',
                        height: 50
                    }
                }}
                headerMode='float' >
                <Stack.Screen name='Header' component={Header}></Stack.Screen>
                <Stack.Screen name='ProductsList' component={ProductsList}></Stack.Screen>
                <Stack.Screen name='AddProduct' component={AddProduct}></Stack.Screen>
                <Stack.Screen name='ProductDetails' component={ProductDetails}></Stack.Screen>
                <Stack.Screen name='EditProduct' component={EditProduct}></Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}