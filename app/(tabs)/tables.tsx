import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

const Tables = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Available", "Occupied", "Reserved","Cleaning","Out of Service"];

  return (
    <View>
      <Title>Tables</Title>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, marginTop: 16}}
      >
        {filters.map((filter) => (
          <Button
            key={filter}
            title={filter}
            variant={activeFilter === filter ? "solid" : "outlined"}
            size="md"
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Tables;
