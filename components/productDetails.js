import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, FlatList,ScrollView } from 'react-native';
// import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { globalstyles } from '../globalstyles/globalstyles'
import Axios from 'axios';

export default function ProductDetails(navigation) {
  console.log(navigation)
  const detail = navigation.route.params.item.item
  console.log(detail)
  const id = detail.id
  console.log(id)
  //const [detail, setDetail] = useState([])
  const editHandler = (navigation) => {
    console.log(navigation.navigation)
    console.log(detail.id)
    navigation.navigation.navigate('EditProduct', { item: detail })
    //console.log(navigation.navigation.navigate)
  }
  const deleteHandler = (id) => {
    console.log(id)
    Axios.delete('http://localhost:3000/allproducts/' + id)
      .then(response => {
        console.log(response.data)
        navigation.navigation.navigate('ProductsList')
      })
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View>
      {/* <ScrollView style={styles.card}>
        <Text style={styles.textStyle}>Details of {detail.productName} from {detail.vendor} vendor</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Code</Text> {detail.productCode}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Name</Text>{detail.productName}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Category</Text> {detail.category}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Vendor</Text> {detail.vendor}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Manufacturer</Text> {detail.Manufacturer}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Available Products</Text> {detail.quantity}</Text>
        <Text style={styles.cardContent}><Text style={styles.head}>Product Price</Text> {detail.price}</Text>
        <TouchableOpacity style={globalstyles.touchButtonContainer} 
        onPress={()=>editHandler(navigation)}><Text>EDIT</Text></TouchableOpacity>
        <TouchableOpacity style={styles.deleteButtonContainer} 
        onPress={()=>deleteHandler(id)}><Text>DELETE</Text></TouchableOpacity>
                
      </ScrollView> */}
      
        
          <View key={detail.id}>
          <ScrollView style={styles.card}>
            
            <Text style={styles.textStyle}>Details of {detail.productName} from {detail.vendor} vendor</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Code</Text> {detail.productCode}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Name</Text>{detail.productName}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Category</Text> {detail.category}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Vendor</Text> {detail.vendor}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Manufacturer</Text> {detail.Manufacturer}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Available Products</Text> {detail.quantity}</Text>
            <Text style={styles.cardContent}><Text style={styles.head}>Product Price</Text> {detail.price}</Text>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
              onPress={() => editHandler(navigation)}><Text>EDIT</Text></TouchableOpacity>
            <TouchableOpacity style={styles.deleteButtonContainer}
              onPress={() => deleteHandler(id)}><Text>DELETE</Text></TouchableOpacity>
          </ScrollView>
          </View>
      
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 24,
    marginVertical: 26,
    display: "flex"
  },
  cardContent: {
    marginHorizontal: 38,
    marginVertical: 10,
    fontSize: 20,
    display: "flex",
    flexWrap: "wrap",
    color: "purple"
  },
  head: {
    fontSize: 20,
    backgroundColor: "#eef",
    width: 220,
    padding: 5,
    marginEnd: 30,
    display: "flex",
    flexWrap: "wrap"
  },
  textStyle: {
    marginHorizontal: 18,
    marginVertical: 20,
    color: "black",
    display: "flex",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  editButtonContainer: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    width: 120,
    justifyContent: "center",
    alignContent: "center"
  },
  deleteButtonContainer: {
    backgroundColor: "#aaddee",
    padding: 10,
    marginLeft: 210,
    marginTop: -67,
    marginBottom: 50,
    borderRadius: 5,
    width: 120,
    justifyContent: "center",
    alignItems: "center"
  }
})