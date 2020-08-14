import React from "react";

import { withFormik, ErrorMessage, Form,Field } from "formik";
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
        <Field
          style={styles.input}
          name="name"
          // value={props.values.name}
        />
        <ErrorMessage name="name" />

        <Text style={styles.label}>Email</Text>
        <Field
          style={styles.input}
          // textContentType="emailAddress"
          // onChangeText={(text) => props.setFieldValue("email", text)}
          name="name"
        />
        <ErrorMessage name="email" />

        <Text style={styles.label}>Senha</Text>
        <Field
          style={styles.input}
          // textContentType="password"
          // onChangeText={(text) => props.setFieldValue("password", text)}
          name="password"
        />
        <ErrorMessage name="password" />

        <RectButton
          // onPress={props.handleSubmit}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </RectButton>
      </Form>
    </View>
  );
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Informe o nome!')
    .min(5, 'O nome deve conter mais de 5 letras!')
    .max(100, 'O nome deve conter menos de 100 letras!')
    .notOneOf(['admin', 'administrador'], 'Esse nome não pode camarada!'),
    password: Yup.string().required("Password is required"),
  email: Yup.string()
    .required('Informe o email!')
    .email('Informe um email válido!')
})


const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "", name: "" }),
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  validationSchema:schema,
  displayName: 'SigIn',


  handleSubmit: (values) => {
    console.log(values);

    api
      .post("api/v1/accounts/", {
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
})

export default enhanceWithFormik(SigIn);
