import React from "react";
import { View, Text,Image } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import BackIcon from '../../assets/images/back.png'

export default function Dashboard() {
  function handleExit(){

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <RectButton 
      onPress={handleExit}
      style={[styles.button, styles.buttonPrimary]}
      >
          <Image source={BackIcon} />
          <Text style={styles.buttonText}>Sair</Text>
      </RectButton>
    </View>
  );
}
