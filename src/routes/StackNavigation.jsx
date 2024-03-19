import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/Welcome";
import Splash from "../screens/Splash";
import Login from "../screens/auth/Login";
import Forget from "../screens/auth/Forget";

import { NavigationContainer } from "@react-navigation/native";
import Register from "../screens/auth/Register";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AddExpenses from "../screens/expenses/AddExpenses";
import AddIncome from "../screens/income/AddIncome";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="AddExpenses" component={AddExpenses} />
        <Stack.Screen name="AddIncome" component={AddIncome} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default StackNavigation;
