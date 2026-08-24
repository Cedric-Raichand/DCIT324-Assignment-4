import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function PokemonDetailsScreen({ route }) {
  const { pokemon } = route.params;

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon details");
      }

      const data = await response.json();

      setDetails(data);
    } catch (err) {
      setError("Unable to load Pokemon details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator
          size="large"
          color="#E53935"
        />

        <Text style={styles.loadingText}>
          Loading details...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          {error}
        </Text>
      </View>
    );
  }

  const types = details.types
    .map((item) => item.type.name)
    .join(", ");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Pokemon Image */}

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon.image }}
          style={styles.pokemonImage}
          resizeMode="contain"
        />
      </View>

      {/* Pokemon Information */}

      <View style={styles.content}>

        <Text style={styles.number}>
          #{pokemon.number}
        </Text>

        <Text style={styles.name}>
          {details.name}
        </Text>

        {/* Type */}

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Type
          </Text>

          <Text style={styles.infoValue}>
            {types}
          </Text>
        </View>

        {/* Height */}

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Height
          </Text>

          <Text style={styles.infoValue}>
            {details.height / 10} m
          </Text>
        </View>

        {/* Weight */}

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            Weight
          </Text>

          <Text style={styles.infoValue}>
            {details.weight / 10} kg
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  imageContainer: {
    height: 330,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  pokemonImage: {
    width: 270,
    height: 270,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  number: {
    fontSize: 15,
    fontWeight: "600",
    color: "#888888",
  },

  name: {
    fontSize: 32,
    fontWeight: "800",
    color: "#222222",
    textTransform: "capitalize",
    marginTop: 4,
    marginBottom: 25,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#777777",
  },

  infoValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222222",
    textTransform: "capitalize",
  },

  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 30,
  },

  loadingText: {
    fontSize: 16,
    color: "#555555",
    marginTop: 12,
  },

  errorText: {
    fontSize: 16,
    color: "#D32F2F",
    textAlign: "center",
  },
});