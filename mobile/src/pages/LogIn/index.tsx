import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const { navigate } = useNavigation();

  function gotoSignupPage() {
    navigate('SigIn')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>




      <Text style={styles.label}>Ainda não possui cadastro?</Text>
      <RectButton
        onPress={gotoSignupPage}
        style={[styles.button, styles.buttonPrimary]}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </RectButton>
    </View>
  );
}
