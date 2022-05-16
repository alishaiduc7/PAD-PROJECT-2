import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import EditProfile from "./EditProfile";

const Profile = ({ navigation }) => {
  const state = {
    name: "Andreea",
    email: "andreea@",
    password: "parola1234",
  };
  function renderHeader() {
    return (
      <View>
        <Text style={styles.profileText}>Profile</Text>
      </View>
    );
  }

  function renderNameText() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Full Name: </Text>
        <Text style={styles.dataText}>{state.name}</Text>
      </View>
    );
  }

  function renderEmailText() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Email:</Text>
        <Text style={styles.dataText}>{state.email}</Text>
      </View>
    );
  }

  function renderPasswordText() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Password:</Text>
        <Text style={styles.dataText}>{state.password}</Text>
      </View>
    );
  }

  function handlePress() {
    return (
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>
    );
  }

  // saveEditedProfile = (name) => {
  //   this.setState({
  //     name: name,
  //   });
  // };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderNameText()}
      {renderEmailText()}
      {renderPasswordText()}
      {handlePress()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7BEA8",
  },
  editBtn: {
    width: "75%",
    borderRadius: 24,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#F3D9DC",
    marginTop: 75,
  },
  editBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#7b435b",
  },
  profileText: {
    padding: 20,
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 30,
    color: "#7b435b",
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
    marginLeft: 25,
    color: "#7b435b",
  },
  dataText: {
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Profile;
