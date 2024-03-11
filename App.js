import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    // <View className="bg-black flex-1 justify-center items-center">
    //   <Text className="text-white text-lg px-5 text-center">
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <Splash />
  );
}
