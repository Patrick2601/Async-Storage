import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { signIn } from "../services/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const go = () => {
    navigation.navigate("SignUp");
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={require("../../src/images/Robosoftimg.png")}
          style={{ marginBottom: 50 }}
        />
      </View>
      <View style={{ marginBottom: 40 }}>
        <Text style={{ fontSize: 30 }}>Welcome to Robosoft</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text>Login Screen</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={
            async (values) => {
              try {
                const jsonValue = await AsyncStorage.getItem(values.email);
                const data = JSON.parse(jsonValue);
                console.log(data);
                if (
                  values.email === data.email &&
                  values.password === data.password
                ) {
                  alert("logged In");
                  navigation.navigate("LoggedIn");
                }
              } catch (e) {
                alert("Invalid id or password");
              }
            }

            // const response = await signIn({
            //   email: values.email,
            //   password: values.password,
            // });
            // if (response.user) {
            //   navigation.navigate("LoggedIn");
            // } else {
            //   alert("Enter correct username and password");
            // }

            // onSubmit={(values) => {
            //   console.log(values);
            //   navigation.navigate("LoggedIn");
          }
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
      <Pressable onPress={go}>
        <Text style={{ fontSize: 20, marginTop: 20 }}>SIGN UP </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    // backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 30,
  },
  textInput: {
    height: 40,
    width: "90%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
});

export default Login;
