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



function DetailsScreen() {
  
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title='go to About' onPress={()=> navigation.navigate('About')}></Button>

    </View>
  );
}


export default DetailsScreen;