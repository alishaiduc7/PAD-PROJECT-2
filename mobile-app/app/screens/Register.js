import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import client from "../api/client";

const isValidObjectField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

export default function Register({ navigation }) {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { fullname, email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjectField(userInfo))
      return updateError("Required all fields!", setError);
    if (!fullname.trim() || fullname.length < 3)
      return updateError("Invalid name!", setError);
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    if (!password.trim() || password.length < 8)
      return updateError("Password is less then 8 characters!", setError);

    return true;
  };

  const register = async () => {
    if (isValidForm) {
      const res = await client.post("/create-user", 
       {fullname,email,password}
      );
      console.log(res.data);
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("mobile-app/app/assets/adaptive-icon.png")}
      />

      <StatusBar style="auto" />
      <Text style={styles.loginView}>REGISTER</Text>
      {error ? (
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <View style={styles.inputView}>
        <TextInput
          value={fullname}
          onChangeText={(value) => handleOnChangeText(value, "fullname")}
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#003F5C"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003F5C"
          onChangeText={(value) => handleOnChangeText(value, "email")}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003F5C"
          secureTextEntry={true}
          onChangeText={(value) => handleOnChangeText(value, "password")}
        />
      </View>

      <TouchableOpacity style={styles.registerBtn} onPress={register}>
        <Text style={styles.loginText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B93052",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: -100,
    marginBottom: 30,
    width: 175,
    height: 175,
  },

  loginView: {
    width: "75%",
    height: 45,
    marginBottom: 20,
    fontSize: 25,
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    width: "75%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  registerBtn: {
    width: "80%",
    borderRadius: 24,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#F3D9DC",
  },
});
