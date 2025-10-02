import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Profile />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
});
