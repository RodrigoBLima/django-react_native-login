import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./src/pages/Dashboard";
import SigIn from "./src/pages/SignUp";
import LogIn from "./src/pages/LogIn";

import api from "./src/services";


const { Navigator, Screen } = createStackNavigator();

function App() {
  const [isSignedIn, setIsSigned] = useState(false);

  function getCurrentUser() {
    console.log("getCurrentUser");
    // return
    api
      .get("api/v1/users/me/")
      .then((res) => {
        console.log("current", res);
      })
      .then((response) => {
        // return json;

        AsyncStorage.setItem(
          "client",
          JSON.stringify(response.data)
        );

      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  }

  async function checkUserSignedIn() {
    // let context = this;
    try {
      let value = await AsyncStorage.getItem("user_token");
      // console.log("user_token ",value);
      if (value !== null) {
        // do something
        setIsSigned(true);
        getCurrentUser();
      } else {
        // do something else
        setIsSigned(false);
      }
    } catch (error) {
      // Error retrieving data
      console.log("checkUserSignedIn error", error);
    }
  }

  useEffect(() => {
    checkUserSignedIn();
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
