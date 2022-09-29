import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Image
} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
//import Robosft


function HomeScreen({route,navigation}) {
  // const route=useRoute()
  // const navigation=useNavigation()
 // console.log('route...',route)
 // console.log('navigation...',navigation)
   const go = () => {
     navigation.navigate('Login');
  };
   const goTo = () => {
     navigation.navigate('Flexbox');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:20,marginTop:20 } }>Home Screen</Text>
      {/* <Button title='go to details' onPress={()=> navigation.navigate('Details')}></Button> */}
      <Pressable onPress={go}>
        <Text style={{fontSize:20,marginTop:20 } }>GO TO LOGIN PAGE</Text>
      </Pressable>
      <Pressable onPress={goTo}>
        <Text style={{fontSize:20,marginTop:20 } }>GO TO FLEX BOX</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
