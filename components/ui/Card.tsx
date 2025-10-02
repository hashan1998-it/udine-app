import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { type LucideIcon } from "lucide-react-native";
import { hexToRgba } from "@/utils/hexToRgba";

interface CardProps {
  tableNumber?: string;
  status?: string;
  assignedTo?: string;
  cardBackgroundColor?: string;
  textColor?: string;
  statusIcon?: LucideIcon;
}

const Card = ({
  tableNumber = "01",
  status = "Dining",
  assignedTo = "Kasun K.",
  cardBackgroundColor = "#FF9800",
  textColor = "#382A00",
  statusIcon: StatusIcon
}: CardProps) => {
  return (
    <View style={[styles.container, { backgroundColor: cardBackgroundColor }]}>
      <Text style={[styles.tableNumber, { color: textColor }]}>
        {tableNumber}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginTop: 4,
        }}
      >
        {StatusIcon && <StatusIcon size={22} color={textColor} />}
        <Text style={[styles.status, { color: textColor }]}>{status}</Text>
      </View>
      <View
        style={[
          styles.assignedTo,
          { backgroundColor: hexToRgba(textColor, 0.3) },
        ]}
      >
        <Text style={[styles.assignedToText, { color: textColor }]}>
          {assignedTo}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tableNumber: {
    fontSize: 48,
    fontWeight: 700,
  },
  status: {
    fontSize: 16,
    fontWeight: 500,
  },
  assignedTo: {
    height: 22,
    flexShrink: 0,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  assignedToText: {
    fontSize: 13,
    textAlign: "center",
  },
});
