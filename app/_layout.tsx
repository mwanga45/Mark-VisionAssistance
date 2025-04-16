import React from "react";
import { Stack } from "expo-router";
import { SlideInLeft } from "react-native-reanimated";
import { Animated } from 'react-native';

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          headerBackTitle: "",
          title: "",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
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
