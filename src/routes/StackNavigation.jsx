import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/Welcome";
import Splash from "../screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import Register from "../screens/auth/Register";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={WelcomePage} /> */}
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
