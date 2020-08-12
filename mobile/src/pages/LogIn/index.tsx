import React,{useState, FormEvent} from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import myConfig from '../../configs/'
import axios from 'axios'
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  function gotoSignupPage() {
    navigate('SigIn')
  }

  function handleSubmitFormLogin(e: FormEvent){
    e.preventDefault()
    console.log({email,password})

    const URL_LOGIN = myConfig.API_URL + "/o/token/";

    axios({
        baseURL: URL_LOGIN,
        method: 'post',
        data: formData(),
    })
        .then(response => {
            if (response.status === 200) {
                // localStorage.setItem('client-token', response.data.access_token);
                // localStorage.setItem('refresh_token', response.data.refresh_token);
                console.log(response.data)
                // //
                // window.location.href = '/';
            }
        }).catch(error => {
            console.log(`Error: ${error.response.data['error_description']}`)
        });
    // setTimeout(() => {
    //     setError(null)
    // }, 3500);
  }

  function formData() {
    const form_data = new FormData()

    form_data.append('username', email)
    form_data.append('password', password)

    form_data.append('grant_type', 'password')
    form_data.append('client_id', 'api')
    form_data.append('client_secret', 'OdcffQR0bZVl4NDW1cXuvGpf1CmRxjyMyDxL7yWrGeIpbpSv5thpJKGDFWYkVUkTQfbllgJPmsixmM07yaozCcbWzuCXVoZ5qUpyKrH7gBI5KuyIAiMK1lcj4hzSPUQC')

    return form_data

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
