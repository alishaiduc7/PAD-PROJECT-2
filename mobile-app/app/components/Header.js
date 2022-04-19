import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Dimensions } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 30 }}>
        <Text style={styles.labelStyle}>Andreea,</Text>
        <Text style={styles.labelStyle}>Welcome Back!</Text>
      </View>
    </SafeAreaView>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 125,
    backgroundColor: "#D7BEA8",
    flexDirection: "row",
  },

  labelStyle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    // textShadowColor: '#394F49',
    // textShadowOffset: {width: -2, height: 2},
    // textShadowRadius: 10,
  },
});

export default Header;
