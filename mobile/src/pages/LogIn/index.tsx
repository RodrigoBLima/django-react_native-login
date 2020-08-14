import React from "react";
import { View, Text } from "react-native";
import { withFormik } from "formik";
import { RectButton, TextInput } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";

import myConfig from "../../configs";
import api from "../../services";
import styles from "./styles";

interface LoginProps {
  email: string;
  password: string;
}

const LogIn: React.FC<LoginProps> = (props) => (
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
    <RectButton style={[styles.button, styles.buttonPrimary]}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </RectButton>
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  handleSubmit: (values) => {
    console.log(values);

    api
      .post("o/token/", {
        username: values.email,
        password: values.password,
        client_id: myConfig.CLIENT_ID,
        client_secret: myConfig.CLIENT_SECRET,
        grant_type: "password",
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("foi");
          AsyncStorage.setItem("user_token", JSON.stringify(response.data.access_token));
          // localStorage.setItem('refresh_token', response.data.refresh_token);
          console.log(response);
          // //
          // window.location.href = '/';
        }
      })
      .catch((error) => {
        console.log("error", error);
        // console.log(`Error: ${error.response.data['error_description']}`)
      });
  },
})(LogIn);
