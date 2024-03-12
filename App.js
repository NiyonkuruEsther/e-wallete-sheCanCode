import { StatusBar } from "expo-status-bar";
import WelcomePage from "./src/screens/Welcome";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";
import { useState, useEffect } from "react";
import StackNavigation from "./src/routes/StackNavigation";

LogBox.ignoreAllLogs();

export default function App() {
  return <StackNavigation />;
}
