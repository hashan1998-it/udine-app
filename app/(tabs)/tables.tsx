import { View } from "react-native";
import React, { useState } from "react";
import Title from "@/components/ui/Title";
import ButtonGroup from "@/components/ui/ButtonGroup";

const Tables = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Available", "Occupied", "Reserved","Cleaning","Out of Service"];

  return (
    <View>
      <Title>Tables</Title>
      <ButtonGroup
        options={filters}
        activeOption={activeFilter}
        onOptionPress={setActiveFilter}
        style={{ marginTop: 16 }}
      />
    </View>
  );
};

export default Tables;
