import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Rewards = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#394f49",
  },
});
