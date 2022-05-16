import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";



const Order = ({ navigation }) => {
  function renderDeliveryAddress(){
    return (
      <View style={styles.deliveryAddress}>
        <Text style={styles.address}>Little Creatures - Club Street</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.location} source={require("mobile-app/app/assets/icons/location.png")} />
          <Text style={styles.address_small}>856 Esta Underpass</Text>
          <Image style={styles.free_delivery} source={require("mobile-app/app/assets/icons/free-delivery.png")} />
        </View>
      </View>
      
    )
  }
  function renderOrderItems(){
    return (
      <View >
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Special Gajananad Bhel</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>Mixed Vegetables, Chicken Egg</Text>
            <Text style={styles.item_price}>$17.20</Text>
          </View>
        </View>
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Cold Bournvita</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>Extra Hot Mild</Text>
            <Text style={styles.item_price}>$15.00</Text>
          </View>
        </View>
        <View style={styles.orderItemsSection}>
          <Text style={styles.order_item}>Butter Jam Maska Bun</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item_specifications}>SweetFire Chicken Breast</Text>
            <Text style={styles.item_price}>$29.50</Text>
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
            <Text style={{marginLeft: 25, color: "#FFFFFF"}}>Subtotal</Text>
            <Text style={{marginRight: 25, color: "#FFFFFF"}}>$61.70</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 25, color: "#FFFFFF"}}>Tax and Fees</Text>
            <Text style={{marginRight: 25, color: "#FFFFFF"}}>$2.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginLeft: 25, color: "#FFFFFF"}}>Delivery</Text>
            <Text style={{marginRight: 25, color: "#FFFFFF"}}>$0.00</Text>
          </View>
          <TouchableOpacity style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
            <Button onPress={() => navigation.navigate("Home")} color="#254441" title="Continue  $63.70"/>
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
    color: "#808080",
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
    backgroundColor: "rgba(243, 217, 220, 0.8)"
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
    backgroundColor: "rgba(243, 217, 220, 1)"
  }
});
