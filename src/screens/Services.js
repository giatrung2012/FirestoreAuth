import { View, Image } from "react-native";
import { COLORS } from "../../constants";
import { IconButton, Text } from "react-native-paper";
import { useMyContextController } from "../context";
import { useEffect } from "react";
import { logo } from "../../constants/images";

export default Services = ({ navigation }) => {
  const [controller, dispatch] = useMyContextController();
  const { userLogin } = controller;
  useEffect(() => {
    if (userLogin == null) navigation.navigate("Login");
  }, [userLogin]);

  return (
    <View>
      <Text>Alo</Text>
    </View>
  );
};
