import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 28,
    color: "#000",
  },
});
