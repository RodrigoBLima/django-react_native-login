import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { withFormik } from "formik";
import { RectButton, TextInput } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

import myConfig from "../../configs";

import axios from "axios";

import styles from "./styles";

interface LoginProps {
  email: string;
  password: string;
  values: string;
}

const LogIn: React.FC<LoginProps> = (props) => {
  const [success, setSuccesss] = useState(false);

  const { navigate } = useNavigation();

  function redirectToDashboard() {
    navigate("Dashboard");
  }

  function handleToSignup() {
    navigate("SigIn");
  }
  function getFormData(values: any) {
    const form_data = new FormData();

    form_data.append("username", values.email);
    form_data.append("password", values.password);

    form_data.append("grant_type", "password");
    form_data.append("client_id", myConfig.CLIENT_ID);
    form_data.append("client_secret", myConfig.CLIENT_SECRET);

    return form_data;
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) =>
        axios({
          method: "POST",
          url: `${myConfig.BASE_URL}o/token/`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: getFormData(values),
        })
          .then((response) => {
            if (response.status === 200) {
              AsyncStorage.setItem(
                "user_token",
                JSON.stringify(response.data.access_token)
              );
              Alert.alert("Sucesso", "Login realizado com sucesso");
              setSuccesss(true);
              redirectToDashboard();
            }
          })
          .catch((error) => {
            console.log("error", error);
            // console.log(`Error: ${error.response.data['error_description']}`)
          })
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={styles.input}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />

          <RectButton onPress={handleSubmit} style={styles.submitButton}>
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
      )}
    </Formik>
  );
};

export default LogIn;