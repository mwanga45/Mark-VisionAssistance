import React from "react";
import { StyleSheet, View, Text ,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landingpage() {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.maincontainer}>
        
      </View>
    </SafeAreaView>
  );
}
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
  Container:{
   flex:1,
   width:"100%",
   
  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
