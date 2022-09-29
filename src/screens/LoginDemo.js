import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginDemo({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const storeData = async () => {
    try {
      const json1 = JSON.stringify(email);
      const json2 = JSON.stringify(password);

      await AsyncStorage.setItem("email", json1);
      await AsyncStorage.setItem("password", json2);
      alert('Submitted')
    } catch (e) {
      console.log(e);
    }
  };
  //   if (email === "Abc" && password === "12345") {
  //     console.log("success");
  //     navigation.navigate("LoggedIn");
  //   } else {
  //     console.log("fail");
  //   }

  const getData = async () => {
    try {
      const jsonvalue1 = await AsyncStorage.getItem('email');
      const jsonvalue2 = await AsyncStorage.getItem("password");
      if (jsonvalue1 !== null) {
        // navigation.navigate("LoggedIn");
        //JSON.parse(jsonvalue)
        console.log("Value is stored");
        console.log(jsonvalue1);
        console.log(jsonvalue2);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Enter email"
          onChangeText={(value) => setEmail(value)}
          style={styles.textInput}
        ></TextInput>
        <TextInput
          placeholder="Enter password"
          onChangeText={(value) => setPassword(value)}
          style={styles.textInput}
        ></TextInput>
        <Button title="submit" onPress={storeData} />
      </View>
      <Button title="Get Data" onPress={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 30,
    height: "20%",
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

export default LoginDemo;
