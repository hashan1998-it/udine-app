import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <Image
      source={require("@/assets/images/logo.png")}
      style={{ width: 100, height: 22, resizeMode: "cover" }}
    />
  );
};

export default Logo;
