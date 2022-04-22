import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B6463",
  },
});
