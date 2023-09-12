import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

export default function PokemonList(props) {
  //   console.log(props);
  const { pokemons } = props;

  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
