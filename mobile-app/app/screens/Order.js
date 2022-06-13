import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";



const Order = ({ navigation }) => {
  function renderDeliveryAddress(){
    return (
      <View style={styles.deliveryAddress}>
        <Text style={styles.address}>Popescu Ion</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.location} source={require("mobile-app/app/assets/icons/location.png")} />
          <Text style={styles.address_small}>C22, Aleea Studentilor, Timisoara</Text>
          <Image style={styles.free_delivery} source={require("mobile-app/app/assets/icons/free-delivery.png")} />
        </View>
      </View>
      
    )
  }
  function renderOrderItems(){
    return (
      <View >
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Cappucino</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>Extra topping, sugar</Text>
            <Text style={styles.item_price}>$17.00</Text>
          </View>
        </View>
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Matcha Tea Latte</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>Vegan milk</Text>
            <Text style={styles.item_price}>$15.00</Text>
          </View>
        </View>
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Dragon Drink</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>Sugar</Text>
            <Text style={styles.item_price}>$15.50</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
              <Text style={styles.addItemsText}>Add more items</Text>
        </TouchableOpacity>
        </View>
    )
  }
  function renderTotalPriceSection(){
    return (
        <View style={{width:"100%",position:'absolute', bottom:0,marginBottom: 85}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 25, color: "#fff1da"}}>Subtotal</Text>
            <Text style={{marginRight: 25, color: "#fff1da"}}>$47.50</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 25, color: "#fff1da"}}>Tax and Fees</Text>
            <Text style={{marginRight: 25, color: "#fff1da"}}>$2.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 25, color: "#fff1da"}}>Delivery</Text>
            <Text style={{marginRight: 25, color: "#fff1da"}}>$0.00</Text>
          </View>
          <TouchableOpacity style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
            <Button onPress={() => navigation.navigate("Home")} color="#254441" title="Continue  $49.50"/>
          </TouchableOpacity>
        </View>
    )
  }
  return (
    <View style={styles.container}>
      {renderDeliveryAddress()}
      {renderOrderItems()}
      {renderTotalPriceSection()}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#394f49",
  },
  address: {
    fontSize: 20,
    color: "#000000",
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 25,
  },
  address_small: {
    fontSize: 12,
    color: "#fff1da",
    marginLeft: 8,
    marginBottom: 20
  },
  location: {
    width: 12,
    height: 15,
    marginLeft: 25
  },
  order_item: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop:10
  },
  item_specifications: {
    fontSize: 12,
    color: "#808080",
    marginLeft: 25,
    marginBottom: 10
  },
  item_price: {
    fontSize: 12,
    color: "#808080",
    marginRight: 25
  },
  addItemsText: {
    marginTop: 10,
    marginBottom:10,
    marginLeft: 25,
    color: "#FFFFFF"
  },
  free_delivery: {
    width:18,
    height: 15,
    marginLeft: 25
  },
  orderItemsSection: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FFFFFF',
    borderBottomWidth: 0,
    // shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: "#D7BEA8"
  },
  deliveryAddress: {
    marginTop:10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderBottomWidth: 0,
    borderColor: '#FFFFFF',
    borderBottomWidth: 0,
    // shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: "#a58e79"
  }
});
