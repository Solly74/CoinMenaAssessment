import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, CountriesScreen } from "../screens";
import { RootStackParamList, THEME } from "../constants";

const AppNavigation = createNativeStackNavigator<RootStackParamList>();

export default function AppStackNavigation() {
  const { Colors } = THEME;

  return (
    <AppNavigation.Navigator
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.darkTurquoise,
        },
        headerShadowVisible: false,
      }}
    >
      <AppNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <AppNavigation.Screen
        name="Countries"
        component={CountriesScreen}
        options={{ title: "All countries" }}
      />
    </AppNavigation.Navigator>
  );
}
