import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";

const Drawer = createDrawerNavigator();

function LogoutScreen() {
  return (
    <View style={styles.logoutContainer}>
      <Text style={styles.logoutTitle}>
        Logout
      </Text>

      <Text style={styles.logoutText}>
        You have selected the Logout option.
      </Text>
    </View>
  );
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen
        name="Main App"
        component={TabNavigator}
        options={{
          title: "Pokedex",
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />

      <Drawer.Screen
        name="Help & Support"
        component={HelpScreen}
      />

      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
      />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logoutTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222222",
    marginBottom: 12,
  },

  logoutText: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
});