import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigator from "./StackNavigator";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{
          title: "Home",
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}