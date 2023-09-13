import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../utils/GetColorByPokemonType";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  // console.log(pokemon.type);
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    console.log(`Vamos Al pokemon ${pokemon.id}`);
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11,
  },
});
