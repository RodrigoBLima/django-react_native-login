import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";

import BackIcon from "../../assets/images/back.png";

import styles from "./styles";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      let value = AsyncStorage.getItem("user_token");
      // console.log(value);
      if (value !== null) {
        // do something
        // console.log("value", value)
        let userData = JSON.stringify(value)
        setUser(userData);
        // getCurrentUser();
      }
    } catch (error) {
      // Error retrieving data
      console.log("Dashboard get data user error", error);
    }
  }, []);

  function handleExit() {
    AsyncStorage.clear();
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
