import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
interface BubbleProps {
  size: number;
  left: number;
  top: number;
}
const Bubble: React.FC<BubbleProps> = ({ size, left, top }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -100,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        translateY.setValue(0);
        opacity.setValue(1);
        animate();
      });
    };

    animate();
  }, []);
  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: size,
          height: size,
          left,
          top,
          opacity,
          transform: [{ translateY }],
        },
      ]}
    />
  );
};

export default function Landingpage() {
  const route = useRouter()
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titlecontainer}>
        <Bubble size={80} left={0.2} top={100} />
        <Bubble size={60} left={0.6} top={200} />
        <Bubble size={100} left={0.35} top={300} />
        <Bubble size={50} left={0.1} top={400} />
        <Bubble size={70} left={0.7} top={150} />
        <Bubble size={70} left={0.7} top={150} />
        <Bubble size={70} left={0.7} top={150} />
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
          <TextInput style={styles.textarea} placeholder="IMC/B....... " />
        </View>
        <View style={styles.formcontainer}>
          <TextInput style={styles.textarea} placeholder="255....." />
        </View>
        <Picker style={styles.formcontainerPicker}>
          <Picker.Item label="Disorder" value="disorder" />
          <Picker.Item label="None" value="none" />
        </Picker>
        <TouchableOpacity style={styles.btn} onPress={() => route.replace("/home/home")}>
          <View style={styles.btncontainer}>
            <Text style={{ color: "white", fontWeight: "800", fontSize: 18 }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 20,
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
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 100,
    pointerEvents: 'none',
  },
  titlepage: {
    color: "#4A4A4A",
    fontWeight: "900",
    fontSize: 30,
  },
  formcontainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#D6D6D6",
    backgroundColor: "#D6D6D6",
    borderRadius: 18,
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  formcontainerPicker: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#D6D6D6",
    backgroundColor: "#D6D6D6",
    borderRadius: 18,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  btn: {
    position: "relative",
    width: "50%",
    height: 40,
    backgroundColor: "#020024",
    top: 70.6,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btncontainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textarea: {},
});
