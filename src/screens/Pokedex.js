import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {
  useEffect(() => {
    console.log("UseEfect run");
    ( async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
