import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import client from "../api/client";

import Register from "./Register";

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

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjectField(userInfo))
      return updateError("Required all fields!", setError);
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    if (!password.trim() || password.length < 8)
      return updateError("Password is less then 8 characters!", setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/sign-in", { ...userInfo });

        navigation.navigate("Home");

        if (res.data.success) {
          setUserInfo({ email: "", password: "" });
        }
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  function renderLogo() {
    return (
      <Image
        style={styles.image}
        source={require("mobile-app/app/assets/adaptive-icon.png")}
      />
    );
  }
  function renderLoginText() {
    return <Text style={styles.loginText}>LOGIN</Text>;
  }
  function renderEmail() {
    return (
      <View style={styles.inputView}>
        <TextInput
          value={email}
          onChangeText={(value) => handleOnChangeText(value, "email")}
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003F5C"
        />
      </View>
    );
  }
  function renderPassword() {
    return (
      <View style={styles.inputView}>
        <TextInput
          value={password}
          onChangeText={(value) => handleOnChangeText(value, "password")}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003F5C"
          secureTextEntry={true}
        />
      </View>
    );
  }
  function renderLoginButton() {
    return (
      <TouchableOpacity style={styles.loginBtn} onPress={submitForm}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    );
  }
  function renderMessageRegisterLink() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.message_register_button}>
          Do you need an account? SIGN UP
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      {renderLogo()}
      {renderLoginText()}
      {error ? (
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      {renderEmail()}
      {renderPassword()}
      {renderLoginButton()}
      {renderMessageRegisterLink()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43AA8B",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: -100,
    marginBottom: 30,
    width: 175,
    height: 175,
  },

  loginText: {
    width: "75%",
    height: 45,
    marginBottom: 20,
    fontSize: 25,
  },

  loginButtonText: {
    textAlign: "center",
    fontSize: 12,
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    width: "75%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  message_register_button: {
    height: 30,
    marginTop: 20,
  },

  loginBtn: {
    width: "75%",
    borderRadius: 24,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#F3D9DC",
  },
});
export default Login;
