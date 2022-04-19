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
 
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("D:/An 3/Sem 2/PAD/Project 2/PAD-PROJECT-2/mobile-app/app/assets/adaptive-icon.png")} />
      
      <StatusBar style="auto" />
      <Text style={styles.loginView}>REGISTER</Text>
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003F5C"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003F5C"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003F5C"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
 
      <TouchableOpacity style={styles.loginBtn}>
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
    margin: 20,
    width: 100,
    height: 120,
  },

  loginView: {
    width: "75%",
    height: 45,
    marginBottom: 20,
    fontSize: 36
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    width: "75%",
    height: 45,
    marginBottom: 20
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
 
  loginBtn: {
    width: "80%",
    borderRadius: 24,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F3D9DC",
  },
});