import React, { useState } from "react";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

// import Wrapper from "../../components/InputWrapper";
// // import Label from "../../components/Label";
// import Input from "../../components/Input";
// import InputWrapper from "../../components/InputWrapper";
import { TextInput, RectButton } from "react-native-gesture-handler";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

// interface SignupProps {
//   title?: string;
// }

// interface FormValues {
//   email: string;
//   password: string;
//   name: string;
// }
// interface MyFormProps {
//   initialEmail?: string;
//   initialPassword?: string;
//   initialName?: string;
// }

const SigIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   isSubmitting,
  //   title,
  // } = props;

  function handleSubmitForm() {
    console.log({
      name,
      email,
      password,
    });
  }
  return (
    <View style={styles.container}>
      <Header title="Realizar cadastro" />

      {/* <Text  style={styles.title}>Cadastro</Text>  */}
      {/* <form > */}
      {/* <InputWrapper> */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        // width={50}
        style={styles.input}
        // id="name"
        // onChange={handleChange}
        // onBlur={handleBlur}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      {/* </InputWrapper> */}

      {/* <InputWrapper> */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        // width={50}
        style={styles.input}
        textContentType="emailAddress"
        // type="email"
        // id="email"
        // onChange={handleChange}
        onChangeText={(text) => {
          setEmail(text);
        }}
        // onBlur={handleBlur("email")}
        value={email}
      />
      {/* </InputWrapper> */}

      {/* <InputWrapper> */}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        // width={50}
        textContentType="password"
        // name="password"
        // id="password"
        // onChange={handleChange}
        // onBlur={handleBlur}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      {/* </InputWrapper> */}
      <RectButton
        onPress={handleSubmitForm}
        // ="submit"
        style={[styles.button, styles.buttonPrimary]}
        // disabled={
        //   isSubmitting ||
        //   !!(errors.email && touched.email) ||
        //   !!(errors.password && touched.password)
        // }
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </RectButton>
      {/* </form> */}
    </View>
  );
};

// const SigIn = withFormik<MyFormProps, FormValues>({
//   mapPropsToValues: (props) => ({
//     email: props.initialEmail || "",
//     password: props.initialPassword || "",
//   }),

//   validationSchema: Yup.object().shape({
//     email: Yup.string().email("Email not valid").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   }),

//   handleSubmit(
//     { email, password, name }: FormValues,
//     { props, setSubmitting, setErrors }
//   ) {
//     console.log(email, password, name);
//   },
// })(InnerForm);

export default SigIn;
