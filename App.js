import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Navigation from "./src/navigation/Navigation";


export default function App() {
  return (
    <NavigationContainer>
     <Navigation/>
    </NavigationContainer>
  );
}
