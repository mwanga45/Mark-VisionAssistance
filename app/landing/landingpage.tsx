import React from "react";
import { StyleSheet, View, Text ,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landingpage() {
  return (
    <SafeAreaView style={styles.Container}>
      <View style = {styles.titlecontainer}>
        <Text style={styles.titlepage}>Let`s get you signed in!</Text>
      </View>
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
   justifyContent:"flex-end",
   paddingBottom:10,


  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor:"white",
    height:height *0.40,
    borderRadius:12
  },
  titlecontainer:{
    width:"100%",
    height:height *0.40,
    justifyContent:"center",
    alignItems:"center",
  },
  titlepage:{
    color:'white',
    fontWeight:"900",
    fontSize:30
  }
});
