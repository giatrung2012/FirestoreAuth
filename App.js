import React, { useEffect } from "react";
import { StyleSheet, Stylesheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { MyContextControllerProvider } from "./src/context";
import Router from "./src/screens/Router";
import { NavigationContainer } from "@react-navigation/native";

const initial = () => {
  const USERS = firestore().collection("USERS");
  const admin = {
    name: "Gia Trung",
    phone: "0888888888",
    address: "Binh Duong",
    email: "admin@giatrung.me",
    password: "123456",
    role: "admin",
  };
  USERS.doc(admin.email).onSnapshot((u) => {
    if (!u.exists) {
      auth()
        .createUserWithEmailAndPassword(admin.email, admin.password)
        .then(() =>
          USERS.doc(admin.email)
            .set(admin)
            .then(() => console.log("Add new user admin!"))
        );
    }
  });
};

export default App = () => {
  useEffect(() => {
    initial();
  }, []);

  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </MyContextControllerProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
