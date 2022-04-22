import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Order = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order Screen</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B6463",
  },
});
