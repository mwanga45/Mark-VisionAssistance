import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          headerBackTitle: "",
          title: "",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
          }}
        />
      </Stack>
    </>
  );
}
