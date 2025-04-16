import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Entrypage = () => {
  const route = useRouter()
  const fadeAnim =  useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0.5)).current;
// having the animation once the page is mount and remove it after the page is unmount
useEffect(()=>{
  Animated.parallel([
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:1000,
      useNativeDriver:true
    }),
    Animated.spring(bounceAnim, {
      toValue:1,
      tension:10,
      friction:2,
      useNativeDriver:true
    })
  ]).start()

  const Timer = setInterval(()=>{
    route.replace("/home/home")
  },2000)

  return  ()=> clearInterval(Timer)

},[])

  return (
     <View style={styles.container}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: bounceAnim }],
          },
        ]}
      >
        <Ionicons name="school" size={100} color="white" />
        <Text style={styles.appName}>Mark Vision</Text>
        <Text style={{color:"grey", fontSize:12, fontWeight:500}}>Power by @45Mwanga</Text>
      </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15AAE6",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  appName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    letterSpacing: 1,
  },
});
export default Entrypage;
