import { StatusBar } from "expo-status-bar";
import WelcomePage from "./src/screens/Welcome";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      
     <WelcomePage/>
      <Splash />
      <StatusBar style="auto" />
    </>
  );
}
