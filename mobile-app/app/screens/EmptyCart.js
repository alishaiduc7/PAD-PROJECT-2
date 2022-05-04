import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function renderEmptyCartImage(){
    return (
        <Image style={styles.image} source={require("mobile-app/app/assets/icons/empty-cart.png")} />
    )
}
const EmptyCart = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {renderEmptyCartImage()}
        <Text style={styles.emptyCartText}>Empty Cart</Text>
        <Text style={styles.text}>Tasty drinks are always preparing!{'\n'}Go ahead, order some yummy items from the menu</Text>
    </View>
  );
};

export default EmptyCart ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8894a0",
  },
  image:{
    marginTop: -50,
    marginBottom: 15,
    width: 150,
    height: 150
  },
  text:{
    textAlign:"center",
    width: "75%",
    height: 45,
    color:"#FFFFFF",
    fontSize: 12
  },
  emptyCartText:{
    textAlign:"center",
    width: "75%",
    height: 45,
    color:"#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  }
});
