import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity } from "react-native";

import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Order from "../screens/Order";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import EmptyCart from "../screens/EmptyCart";
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#F3D9DC",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#424744",
          borderTopColor: "transparent",
          height: Platform.OS == "android" ? 60 : 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("mobile-app/app/assets/icons/home.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#D7BEA8" : "#FFFFFF",
              }}
            ></Image>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("mobile-app/app/assets/icons/menu.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#D7BEA8" : "#FFFFFF",
              }}
            ></Image>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("mobile-app/app/assets/icons/add.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#254441" : "#FFFFFF",
              }}
            ></Image>
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}></CustomTabBarButton>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("mobile-app/app/assets/icons/favorites.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#8a1c1f" : "#FFFFFF",
              }}
            ></Image>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("mobile-app/app/assets/icons/user.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#D7BEA8" : "#FFFFFF",
              }}
            ></Image>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
