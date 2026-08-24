import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PokemonCard({
  name,
  image,
  number,
  isFavourite,
  onToggleFavourite,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Pokemon Image */}

      <Image
        source={{ uri: image }}
        style={styles.pokemonImage}
        resizeMode="contain"
      />

      {/* Pokemon Information */}

      <View style={styles.info}>

        <Text style={styles.number}>
          #{number}
        </Text>

        <Text style={styles.name}>
          {name}
        </Text>

      </View>

      {/* Favourite Button */}

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={onToggleFavourite}
      >
        <Text style={styles.favoriteIcon}>
          {isFavourite ? "♥" : "♡"}
        </Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    minHeight: 190,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 15,
    padding: 12,
    position: "relative",
  },

  pokemonImage: {
    width: "100%",
    height: 120,
  },

  info: {
    marginTop: 5,
  },

  number: {
    fontSize: 12,
    color: "#888888",
    fontWeight: "600",
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222222",
    textTransform: "capitalize",
    marginTop: 3,
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteIcon: {
    fontSize: 20,
    color: "#E53935",
  },
});