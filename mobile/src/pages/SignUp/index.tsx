import React, { useState } from "react";

import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, Alert } from "react-native";
import { TextInput, View } from "react-native";

import Header from "../../components/Header";

import api from "../../services";

import { Formik, ErrorMessage } from "formik";

import styles from "./styles";

interface Props {}

const SigIn: React.FC<Props> = (props) => {
  const [success, setSuccesss] = useState(false);

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("LogIn");
  }

  return (
    <Formik
      initialValues={{ email: "", name: "", password: "" }}
      onSubmit={(values) =>
        api
          .post("api/v1/users/", {
            username: values.email,
            password: values.password,
            email: values.email,
          })
          .then((response) => {
            console.log(response.data);
            if (response.status === 201) {
              setSuccesss(true);
              handleGoBack();
            }
          })
          .catch(function (error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
            // ADD THIS THROW error
            throw error;
          })
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Header title="Realizar cadastro" />
          {success && Alert.alert("Sucesso", "Cadastro realizado com sucesso")}
          <Text style={styles.label}>Nome</Text>
          <TextInput
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            style={styles.input}
          />
          <ErrorMessage name="name" />

          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={styles.input}
          />
          <ErrorMessage name="email" />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <ErrorMessage name="password" />

          <RectButton
            onPress={handleSubmit}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </RectButton>
        </View>
      )}
    </Formik>
  );
};
export default SigIn;
