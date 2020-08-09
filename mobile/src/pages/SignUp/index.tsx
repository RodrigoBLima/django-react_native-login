import React from "react";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import Wrapper from "../../components/InputWrapper";
import Label from "../../components/Label";
import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";

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
    <Wrapper>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Nome</Label>
          <Input
            width={50}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Email</Label>
          <Input
            width={50}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Senha</Label>
          <Input
            width={50}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </InputWrapper>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)
          }
        >
          Sign In
        </button>
      </form>
    </Wrapper>
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
