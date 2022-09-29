import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';



function AboutScreen() {
  const route=useRoute()
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>

      <Button title='go to Contact' onPress={()=> navigation.navigate('Contact')}></Button>

    </View>
  );
}


export default AboutScreen;