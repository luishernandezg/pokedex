import { View, ScrollV, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <FontAwesome
          name="arrow-left"
          size={20}
          color="#fff"
          style={{ marginLeft: 5 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
