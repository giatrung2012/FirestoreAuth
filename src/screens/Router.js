import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useMyContextController } from "../context";
import { createStackNavigator } from "@react-navigation/stack";
import Admin from "./Admin";
import Login from "./Login";
import Customer from "./Customer";

const Stack = createStackNavigator();

export default Router = () => {
  const [controller, dispatch] = useMyContextController();
  const { userLogin } = controller;
  //console. log(userLogin)
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
