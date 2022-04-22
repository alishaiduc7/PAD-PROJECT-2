import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B6463",
  },
});
