import React from "react";
import { Stack, } from "expo-router";
import { StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BlurTabBarBackground from '../components/ui/TabBarBackground.ios';

export default function Layout() {
  return (
    <>
    <StatusBar barStyle = "light-content"/>
      <Stack
        screenOptions={{
          headerShown: false,
          headerBackTitle: "",
          title: "",
          animation: "slide_from_right",
          contentStyle:{
            backgroundColor:Colors.light.background,
          }
        }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
            headerTitle:""
          }}
        />
        <Stack.Screen name="home/home" options={{
          headerShown:false,
          title:"",
          contentStyle:{
            paddingHorizontal:5
          }
        }}/>
      </Stack>
    </>
  );
}
