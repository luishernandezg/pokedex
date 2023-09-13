import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  //   console.log(props);
  const { pokemons, loadPokemons, isNext, isLoading } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={!isLoading && isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#AEAEAE"
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 60 : 60,
  },
});
