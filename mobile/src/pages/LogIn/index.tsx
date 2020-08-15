import React from "react";
import { View, Text } from "react-native";
import { withFormik } from "formik";
import { RectButton, TextInput } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import myConfig from "../../configs";
import api from "../../services";
import styles from "./styles";
import axios from "axios";

interface LoginProps {
  email: string;
  password: string;
  values: string;
}


const LogIn: React.FC<LoginProps> = (props) => {
  const { navigate } = useNavigation();

  function handleToSignup() {
    navigate("SigIn");
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        onChangeText={(text) => props.setFieldValue("email", text)}
        value={props.values.email}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        textContentType="password"
        onChangeText={(text) => props.setFieldValue("password", text)}
        value={props.values.password}
      />

      <RectButton onPress={props.handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Salvar</Text>
      </RectButton>

      <Text style={styles.label}>Ainda não possui cadastro?</Text>
      <RectButton
        onPress={handleToSignup}
        style={[styles.button, styles.buttonPrimary]}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </RectButton>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  handleSubmit: (values) => {
    console.log("values", values);

    // navigatetoDashboard(){
    // }
    // let data =
    // const formData = new FormData();
    // formData.append('data', JSON.stringify(data));
    // // console.log("formData",formData)
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
    // const requestBody = {
    //   grant_type: 'password',
    //   client_id: 'api',
    //   client_secret: '40Sazs1Ixasbf0cUAvUBZnmDZwKTHIKrx2q4DTEv7VVoCXV5at7HOi4Mb5p9ruIwFAGpTe9LO7NHB3RfgYAXcRBxjAnyrdxvvMofJXxQlrdnCcyp0WRFbgrvW1CaYTy0',
    //   username: 'rodrigo.lima@agriconnected.com',
    //   password: "rodrigo"
    // }

    const form_data = new FormData();

    form_data.append("username", "rodrigo.lima@agriconnected.com");
    form_data.append("password", "rodrigo");

    form_data.append("grant_type", "password");
    form_data.append("client_id", myConfig.CLIENT_ID);
    form_data.append("client_secret", myConfig.CLIENT_SECRET);

    axios({
      method: "POST",
      url: myConfig.BASE_URL + "o/token/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: form_data,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("foi");
          AsyncStorage.setItem(
            "user_token",
            JSON.stringify(response.data.access_token)
          );
          // navigate("Dashboard");

          // navigatetoDashboard()
          // localStorage.setItem('refresh_token', response.data.refresh_token);
          // console.log(response.data);
          // //
          // window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("error", error);
        // console.log(`Error: ${error.response.data['error_description']}`)
      });
    // api
    //   .post(
    //     "o/token/", JSON.stringify(requestBody),config

    //     // Headers: {
    //     //   Content-Type	application/json
    //     // })
    //     //   axios({
    //     //     url: myConfig.BASE_URL + "o/token/",
    //     //     method: 'POST',
    //     //     data:formData
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log("foi");
    //       AsyncStorage.setItem(
    //         "user_token",
    //         JSON.stringify(response.data.access_token)
    //       );
    //       // localStorage.setItem('refresh_token', response.data.refresh_token);
    //       console.log(response);
    //       // //
    //       // window.location.href = '/';
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     // console.log(`Error: ${error.response.data['error_description']}`)
    // });
  },
})(LogIn);
