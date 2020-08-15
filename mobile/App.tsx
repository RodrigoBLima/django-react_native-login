
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
// import Route from "./src/routes/Route";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/pages/Dashboard";
import SigIn from "./src/pages/SignUp";
import LogIn from "./src/pages/LogIn";
import api from "./src/services";
import axios from 'axios'
const { Navigator, Screen } = createStackNavigator();

function App() {
  const [isSignedIn, setIsSigned] = useState(false);

  function getCurrentUser() {
    console.log("getCurrentUser");
    // return 
      api.get("api/v1/accounts/me/")
      .then((res) => {
        console.log("current", res);
      })
      .then(function (json) {
        return json;
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  }

  useEffect(() => {
    // getCurrentUser();
    console.log("user_token", AsyncStorage.getItem("user_token"));
    // if (typeof(AsyncStorage.getItem("user_token")) !== object) {
    //   console.log("tem user token");
    setIsSigned(false);
    // }
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
