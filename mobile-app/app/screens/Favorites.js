import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Favorites  Screen</Text>
    </View>
  );
};

export default Favorites ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B6463",
  },
});
