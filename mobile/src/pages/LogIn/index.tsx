import React,{useState} from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  function gotoSignupPage() {
    navigate('SigIn')
  }

  function handleSubmitFormLogin(){
    console.log({email,password})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      


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
        onPress={handleSubmitFormLogin}
        // ="submit"
        style={styles.submitButton}
        // disabled={
        //   isSubmitting ||
        //   !!(errors.email && touched.email) ||
        //   !!(errors.password && touched.password)
        // }
      >
        <Text style={styles.submitButtonText}>Salvar</Text>
      </RectButton>



      <Text style={styles.label}>Ainda não possui cadastro?</Text>
      <RectButton
        onPress={gotoSignupPage}
        style={[styles.button, styles.buttonPrimary]}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </RectButton>
    </View>
  );
}
