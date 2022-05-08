import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./app/navigation/tabs";
import Rewards from "./app/screens/Rewards";
import Register from "./app/screens/Register";
import Menu from "./app/screens/Menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen 
          name="Rewards"
          component={Rewards}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="Menu"
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


