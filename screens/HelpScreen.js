import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Help & Support
      </Text>

      <Text style={styles.description}>
        Need help? You can find support information
        for the Pokedex application here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222222",
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
  },
});