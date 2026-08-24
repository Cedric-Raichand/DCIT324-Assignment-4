import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import PokemonCard from "../components/PokemonCard";

export default function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Store the IDs of favourite Pokemon
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon");
      }

      const data = await response.json();

      const formattedPokemon = data.results.map((item, index) => ({
        id: index + 1,
        name: item.name,
        number: String(index + 1).padStart(3, "0"),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      }));

      setPokemon(formattedPokemon);
    } catch (err) {
      setError("Unable to load Pokemon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle favourite
  const toggleFavourite = (pokemonId) => {
    setFavourites((currentFavourites) => {
      if (currentFavourites.includes(pokemonId)) {
        return currentFavourites.filter(
          (id) => id !== pokemonId
        );
      }

      return [...currentFavourites, pokemonId];
    });
  };

  // Loading state
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator
          size="large"
          color="#E53935"
        />

        <Text style={styles.loadingText}>
          Loading Pokemon...
        </Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Pokedex
          </Text>

          <Text style={styles.subtitle}>
            Explore the Pokemon world
          </Text>
        </View>

        <Text style={styles.pokemonCount}>
          {pokemon.length}
        </Text>
      </View>

      {/* Pokemon List */}

      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            number={item.number}
            isFavourite={favourites.includes(item.id)}
            onToggleFavourite={() =>
              toggleFavourite(item.id)
            }
            onPress={() =>
              navigation.navigate("PokemonDetails", {
                pokemon: item,
              })
            }
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },

  header: {
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#222222",
  },

  subtitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 3,
  },

  pokemonCount: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#E53935",
    color: "#FFFFFF",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "700",
  },

  list: {
    paddingBottom: 25,
  },

  row: {
    justifyContent: "space-between",
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