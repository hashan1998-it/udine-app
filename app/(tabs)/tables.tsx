import { View, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Title from "@/components/ui/Title";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Card from "@/components/ui/Card";
import {
  Utensils,
  Armchair,
  BadgeDollarSign,
} from "lucide-react-native";

const Tables = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Dining", "Free", "Ready to Pay"];

  const tableData = [
    {
      id: "1",
      tableNumber: "01",
      status: "Dining",
      assignedTo: "Kasun K.",
      cardBackgroundColor: "#FF9800",
      textColor: "#382A00",
      statusIcon: Utensils,
    },
    {
      id: "2",
      tableNumber: "02",
      status: "Free",
      cardBackgroundColor: "#12C65B",
      textColor: "#042F15",
      statusIcon: Armchair,
    },
    {
      id: "3",
      tableNumber: "03",
      status: "Ready to Pay",
      assignedTo: "Saman P.",
      cardBackgroundColor: "#F44336",
      textColor: "#570A05",
      statusIcon: BadgeDollarSign,
    },
    {
      id: "4",
      tableNumber: "04",
      status: "Ready to Pay",
      assignedTo: "Perera A.",
      cardBackgroundColor: "#F44336",
      textColor: "#570A05",
      statusIcon: BadgeDollarSign,
    },
    {
      id: "5",
      tableNumber: "05",
      status: "Ready to Pay",
      assignedTo: "Ruwan D.",
      cardBackgroundColor: "#F44336",
      textColor: "#570A05",
      statusIcon: BadgeDollarSign,
    },
    {
      id: "6",
      tableNumber: "06",
      status: "Ready",
      assignedTo: "Dilshan M.",
      cardBackgroundColor: "#00BCD4",
      textColor: "#00363D",
      statusIcon: Armchair,
    },
  ];

  const filteredData =
    activeFilter === "All"
      ? tableData
      : tableData.filter((table) => table.status === activeFilter);

  return (
    <View style={{ flex: 1 }}>
      <Title>Tables</Title>
      <ButtonGroup
        options={filters}
        activeOption={activeFilter}
        onOptionPress={setActiveFilter}
        style={{
          marginVertical: 16,
        }}
      />
      <FlatList
        data={filteredData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card
              tableNumber={item.tableNumber}
              status={item.status}
              assignedTo={item.assignedTo}
              cardBackgroundColor={item.cardBackgroundColor}
              textColor={item.textColor}
              statusIcon={item.statusIcon}
            />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tables;

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  cardWrapper: {
    flex: 1,
    maxWidth: "50%",
  },
});
