import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PokemonDetailsScreen from "../screens/PokemonDetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetailsScreen}
        options={{
          title: "Pokemon Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
}