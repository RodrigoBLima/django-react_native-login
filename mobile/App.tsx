import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// import Route from "./src/routes/Route";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

function App() {
  const [isSignedIn, setIsSigned] = useState(false);

  useEffect(() => {
    if (AsyncStorage.getItem("user_token") !== null) {
      console.log("tem user token");
      setIsSigned(true);
    }
    // let user_token  = AsyncStorage.getItem("user_token")
    // console.log(user_token)
  }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Screen name="Dashboard" component={Dashboard} />
          </>
        ) : (
          <>
            <Screen name="LogIn" component={LogIn} />
            <Screen name="SigIn" component={SigIn} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
