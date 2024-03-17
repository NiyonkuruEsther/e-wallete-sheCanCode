import { StatusBar } from "expo-status-bar";
import WelcomePage from "./src/screens/Welcome";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";
import { useState, useEffect } from "react";
import StackNavigation from "./src/routes/StackNavigation";
import AddExpenses from "./src/screens/expenses/AddExpenses";
import Register from "./src/screens/auth/Register";
import { NavigationContainer } from "@react-navigation/native";
import AnimTab1 from "./src/routes/BottomsNavigation";

LogBox.ignoreAllLogs();

export default function App() {
  // return <AddExpenses />;
  // return <Register />;
  return (
    <NavigationContainer>
      <AnimTab1 />
    </NavigationContainer>
  );
}
