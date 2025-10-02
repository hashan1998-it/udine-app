import { View } from "react-native";
import { Tabs } from "expo-router";
import { Icons } from "@/components/icons";
import { COLORS } from "@/constants/colors";
import Header from "@/components/ui/Header";

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName="tables"
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        sceneStyle: { backgroundColor: "white",paddingHorizontal:16 },
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
