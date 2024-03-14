import { createStackNavigator } from "@react-navigation/stack";
// import WelcomePage from "../screens/Welcome";
// import Splash from "../screens/Splash";
// import Login from "../screens/auth/Login";
// import Forget from "../screens/auth/Forget";

import Card from '../../src/components/UI/Card'

import { NavigationContainer } from "@react-navigation/native";
// import Register from "../screens/auth/Register";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={WelcomePage} /> */}

<Stack.Screen name="Card" component={Card} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default StackNavigation;
