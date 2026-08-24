import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        About Pokedex
      </Text>

      <Text style={styles.description}>
        Pokedex is a simple Pokemon browser built
        with React Native and Expo.
      </Text>

      <Text style={styles.description}>
        Pokemon information is fetched live from
        the PokeAPI.
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
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 10,
  },
});