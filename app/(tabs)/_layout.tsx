import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icons } from "@/components/icons";
import { COLORS } from "@/constants/colors";

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName="tables"
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: COLORS.tabBarActiveTintColor,
        tabBarInactiveTintColor: COLORS.tabBarInactiveTintColor,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: COLORS.tabBarBackgroundColor,
              flex: 1,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="tables"
        options={{
          title: "Tables",
          tabBarIcon: ({ color }) => <Icons.TableIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <Icons.OrderIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => <Icons.MenuIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => <Icons.ReportIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
