import React from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landingpage() {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titlepage}>Let`s get you signed in!</Text>
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.formdiscription}>
          <Text style={{ color: "#4A4A4A", fontWeight: "500", fontSize: 18 }}>
            Please use Registration
          </Text>
          <Text style={{ color: "black", fontWeight: "800", fontSize: 18 }}>
            Sign Up
          </Text>
        </View>
        <View style={styles.formcontainer}>
          <TextInput style={styles.textarea} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  maincontainer: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    height: height * 0.45,
    borderRadius: 50,
    justifyContent:"flex-start",
    alignItems:"center",
    rowGap:20
  },
  formdiscription: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titlecontainer: {
    width: "100%",
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  titlepage: {
    color: "#4A4A4A",
    fontWeight: "900",
    fontSize: 30,
  },
  formcontainer: {
    width:"80%",
    borderWidth:1,
    borderColor:"#D6D6D6",
    backgroundColor:"#D6D6D6",
    borderRadius:18,
    height:45,
  },
  textarea: {
  },
});
