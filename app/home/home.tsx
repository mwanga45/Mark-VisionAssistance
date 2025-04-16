import React from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const {height} = Dimensions.get('window')
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#E3F6FF"}}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

})

export default HomeScreen;
