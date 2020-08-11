import React from "react";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

// import Wrapper from "../../components/InputWrapper";
// // import Label from "../../components/Label";
// import Input from "../../components/Input";
// import InputWrapper from "../../components/InputWrapper";
import { TextInput, RectButton } from "react-native-gesture-handler";
import { View,Text, Button } from "react-native";
import styles from "./styles";

interface SignupProps {
  title?: string;
}

interface FormValues {
  email: string;
  password: string;
  name: string;
}
interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialName?: string;
}

const InnerForm = (props: SignupProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    title,
  } = props;

  return (
    <View style={styles.container}>
      
      <Text  style={styles.title}>Cadastro</Text> 
      {/* <form > */}
        {/* <InputWrapper> */}
          <Text  style={styles.label}>Nome</Text>
          <TextInput
            // width={50}
            style={styles.input}

            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        {/* </InputWrapper> */}

        {/* <InputWrapper> */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            // width={50}
            style={styles.input}

            // type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        {/* </InputWrapper> */}

        {/* <InputWrapper> */}
          <Text style={styles.label}>Senha</Text>
          <TextInput
          style={styles.input}
            // width={50}
            // type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        {/* </InputWrapper> */}
        <RectButton
        onPress={handleSubmit}
          type="submit"
          style={[styles.button, styles.buttonPrimary]}

          disabled={
            isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)
          }
        >
          <Text  style={styles.buttonText}>Salvar</Text>
        </RectButton>
      {/* </form> */}
    </View>
  );
};

const SigIn = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default SigIn;
