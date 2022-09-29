// SignUp.js
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import CustomInput from "./CustomInput";
import { signUp } from "../services/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = ({ navigation }) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter at least 2 names")
      .required("Full name is required"),
    age: yup
      .string()
      .matches(/(\d){2}\b/, "Enter a valid age")
      .required("age is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      // .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      // .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      // .matches(/\d/, "Password must have a number")
      //  .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text>Sign Up Screen</Text>

          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: "",
              email: "",
              age: "",
              password: "",
              confirmPassword: "",
            }}
            //onSubmit={values => console.log(values)}
            onSubmit={async (values) => {
              try {
                const jsonValue = JSON.stringify(values);
                await AsyncStorage.setItem(values.email, jsonValue);
                alert("user added");
                navigation.navigate("Login");
              } catch (e) {
                console.log(`error.......${e}`);
              }

              // const response = await signUp({
              //   email: values.email,
              //   name: values.fullName,
              //   age: values.age,
              //   password: values.password,
              // });
              // if (response.user) {
              //   alert('succefully added');
              //   navigation.navigate('Login');
              // }
              // else{
              //   alert("User Already Exist")
              // }
              //   // console.log(values);
              //   // navigation.navigate('Project');
            }}
          >
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="Full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="age"
                  placeholder="Age"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                />

                <Button
                  onPress={handleSubmit}
                  title="SIGN UP"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
});
export default SignUp;
