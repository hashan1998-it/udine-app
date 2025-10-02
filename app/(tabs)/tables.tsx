import { View, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Title from "@/components/ui/Title";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Card from "@/components/ui/Card";
import { Utensils, CheckCircle, Clock, Sparkles } from "lucide-react-native";

const Tables = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Available",
    "Occupied",
    "Reserved",
    "Cleaning",
    "Out of Service",
  ];

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
      status: "Occupied",
      assignedTo: "Nimal S.",
      cardBackgroundColor: "#4CAF50",
      textColor: "#003300",
      statusIcon: Utensils,
    },
    {
      id: "3",
      tableNumber: "03",
      status: "Available",
      assignedTo: "Saman P.",
      cardBackgroundColor: "#2196F3",
      textColor: "#001A33",
      statusIcon: CheckCircle,
    },
    {
      id: "4",
      tableNumber: "04",
      status: "Reserved",
      assignedTo: "Perera A.",
      cardBackgroundColor: "#9C27B0",
      textColor: "#1A0033",
      statusIcon: Clock,
    },
    {
      id: "5",
      tableNumber: "05",
      status: "Cleaning",
      assignedTo: "Ruwan D.",
      cardBackgroundColor: "#FFC107",
      textColor: "#3D2F00",
      statusIcon: Sparkles,
    },
    {
      id: "6",
      tableNumber: "06",
      status: "Dining",
      assignedTo: "Dilshan M.",
      cardBackgroundColor: "#FF9800",
      textColor: "#382A00",
      statusIcon: Utensils,
    },
    {
      id: "7",
      tableNumber: "07",
      status: "Available",
      assignedTo: "Chamara L.",
      cardBackgroundColor: "#2196F3",
      textColor: "#001A33",
      statusIcon: CheckCircle,
    },
    {
      id: "8",
      tableNumber: "08",
      status: "Reserved",
      assignedTo: "Nipun T.",
      cardBackgroundColor: "#9C27B0",
      textColor: "#1A0033",
      statusIcon: Clock,
    },
    {
      id: "9",
      tableNumber: "09",
      status: "Occupied",
      assignedTo: "Tharindu W.",
      cardBackgroundColor: "#4CAF50",
      textColor: "#003300",
      statusIcon: Utensils,
    },
    {
      id: "10",
      tableNumber: "10",
      status: "Dining",
      assignedTo: "Supun R.",
      cardBackgroundColor: "#FF9800",
      textColor: "#382A00",
      statusIcon: Utensils,
    },
  ];

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
        data={tableData}
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
