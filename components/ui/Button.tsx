import { Text, Pressable, StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";

type ButtonVariant = "solid" | "outlined" | "link" | "text";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({ 
  title, 
  variant = "solid", 
  size = "md",
  onPress,
  disabled = false 
}: ButtonProps) => {
  const getContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      xs: {
        paddingVertical: 4,
        paddingHorizontal: 12,
      },
      sm: {
        paddingVertical: 6,
        paddingHorizontal: 16,
      },
      md: {
        paddingVertical: 8,
        paddingHorizontal: 20,
      },
      lg: {
        paddingVertical: 12,
        paddingHorizontal: 24,
      },
    };

    // Variant styles
    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      solid: {
        backgroundColor: disabled ? "#555555" : "#121212",
      },
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: disabled ? "#555555" : "#121212",
      },
      link: {
        backgroundColor: "transparent",
        paddingVertical: 0,
        paddingHorizontal: 0,
      },
      text: {
        backgroundColor: "transparent",
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getTextStyle = (): TextStyle => {
    // Size text styles
    const sizeTextStyles: Record<ButtonSize, TextStyle> = {
      xs: {
        fontSize: 11,
      },
      sm: {
        fontSize: 12,
      },
      md: {
        fontSize: 13,
      },
      lg: {
        fontSize: 15,
      },
    };

    // Variant text styles
    const variantTextStyles: Record<ButtonVariant, TextStyle> = {
      solid: {
        color: disabled ? "#aaaaaa" : "white",
      },
      outlined: {
        color: disabled ? "#555555" : "#121212",
      },
      link: {
        color: disabled ? "#555555" : "#007AFF",
        textDecorationLine: "underline",
      },
      text: {
        color: disabled ? "#555555" : "#121212",
      },
    };

    return {
      fontWeight: "500",
      ...sizeTextStyles[size],
      ...variantTextStyles[variant],
    };
  };

  return (
    <Pressable 
      style={({ pressed }) => [
        getContainerStyle(),
        pressed && !disabled && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});