import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <Splash />

      <StatusBar style="auto" />
    </>
  );
}
