import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';


function LoggedIn(navigation) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>YOU ARE LOGGED IN</Text>
    </View>
  );
}


export default LoggedIn;