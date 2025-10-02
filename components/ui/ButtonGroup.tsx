import { ScrollView, ViewStyle } from "react-native";
import React from "react";
import Button from "./Button";

interface ButtonGroupProps {
  options: string[];
  activeOption: string;
  onOptionPress: (option: string) => void;
  variant?: "solid" | "outlined";
  size?: "xs" | "sm" | "md" | "lg";
  style?: ViewStyle;
}

const ButtonGroup = ({
  options,
  activeOption,
  onOptionPress,
  variant = "outlined",
  size = "md",
  style,
}: ButtonGroupProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[{ flexGrow: 0, flexShrink: 0, marginHorizontal: -16 }, style]}
      contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
    >
      {options.map((option) => (
        <Button
          key={option}
          title={option}
          variant={activeOption === option ? "solid" : variant}
          size={size}
          onPress={() => onOptionPress(option)}
        />
      ))}
    </ScrollView>
  );
};

export default ButtonGroup;
