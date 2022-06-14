import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import Tabs from "./app/navigation/tabs";
import Rewards from "./app/screens/Rewards";
import Register from "./app/screens/Register";
import Menu from "./app/screens/Menu";
import Login from "./app/screens/Login";
import ProductDetails from "./app/screens/ProductDetails";
import Profile from "./app/screens/Profile";
import EditProfile from "./app/screens/EditProfile";
import Home from "./app/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const fetchApi = async () => {
    try {
      const res = await axios.get("http://192.168.0.135:8000/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"none"}
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
