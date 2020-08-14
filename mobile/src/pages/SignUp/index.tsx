import React from "react";

import { withFormik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import { TextInput, RectButton } from "react-native-gesture-handler";
import { View, Text } from "react-native";

import Header from "../../components/Header";

import api from "../../services";

import styles from "./styles";

interface SignupProps {
  email: string;
  password: string;
  name: string;
}

const SigIn: React.FC<SignupProps> = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Realizar cadastro" />

      <Form>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => props.setFieldValue("name", text)}
          value={props.values.name}
        />
        <ErrorMessage name="name" />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          onChangeText={(text) => props.setFieldValue("email", text)}
          value={props.values.email}
        />
        <ErrorMessage name="email" />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          onChangeText={(text) => props.setFieldValue("password", text)}
          value={props.values.password}
        />
        <ErrorMessage name="password" />

        <RectButton
          onPress={props.handleSubmit}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </RectButton>
      </Form>
    </View>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "", name: "" }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
  }),

  handleSubmit: (values) => {
    console.log(values);

    api
      .post("users/", {
        username: values.email,
        password: values.password,
        email: values.email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error", error);
        // console.log(`Error: ${error.response.data['error_description']}`)
      });
  },
})(SigIn);
