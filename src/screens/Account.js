import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";

export default function Account() {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
