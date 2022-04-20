import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native";
 
const Login = ({navigation}) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function renderLogo(){
    return (
        <Image style={styles.image} source={require("mobile-app/app/assets/adaptive-icon.png")} />
    )
  }
  function renderLoginText(){
    return (
        <Text style={styles.loginText}>LOGIN</Text>
    )
  }
  function renderEmail(){
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003F5C"
                onChangeText={(email) => setEmail(email)}
            />
        </View>
    )
  }
  function renderPassword(){
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003F5C"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>
    )
  }
  function renderLoginButton(){
    return (
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
    )
  }
  function renderMessageRegisterLink(){
    return(
        <TouchableOpacity>
            <Text style={styles.message_register_button}>Do you need an account? SIGN UP</Text>
        </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
        {renderLogo()}
        {renderLoginText()}
        {renderEmail()}
        {renderPassword()}
        {renderLoginButton()}
        {renderMessageRegisterLink()}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43AA8B",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 100,
    width: 150,
    height: 150
  },

  loginText: {
    width: "75%",
    height: 45,
    marginBottom: 20,
    fontSize: 25
  },

  loginButtonText: {
    textAlign: "center",
    fontSize: 12
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