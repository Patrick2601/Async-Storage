/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ServiceScreen from "./src/screens/ServiceScreen";
import ContactScreen from "./src/screens/ContactScreen";
import Flexbox from "./src/screens/Flexbox";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import LoggedIn from "./src/screens/LoggedIn";
import DetailsScreen from "./src/screens/DetailsScreen";
import LoginDemo from "./src/screens/LoginDemo"

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    //NAVIGATOR PROPS
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{headerStyle: {backgroundColor: 'grey'}}}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //SCREEN PROPS
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerStyle: {backgroundColor: 'grey'},
    //         headerTintColor: 'blue',
    //         headerTitleAlign:'center',
    //       }}
    //     />
    //     <Stack.Screen name="About" component={AboutScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>

    // GROUP

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"  >
        {/* <Stack.Group screenOptions={{headerStyle: {backgroundColor: 'grey'}}}> */}
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="LoggedIn" component={LoggedIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LoginDemo" component={LoginDemo} />
          {/* <Stack.Screen name="LoginDemo" component={LoginDemo} /> */}
          {/* <Stack.Screen name="Flexbox" component={Flexbox} /> */}
          {/* <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Service" component={ServiceScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} /> */}
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>

 
  );
};

export default App;
