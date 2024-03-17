import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import AddExpenses from "../screens/expenses/AddExpenses";
import { Icon } from "react-native-paper";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: "home",
    icon: "home-outline",
    component: AddExpenses
  },
  {
    route: "Search",
    label: "Wallet",
    type: "Transactions",
    icon: "wallet",
    component: AddExpenses
  },
  {
    route: "Add",
    label: "Add",
    type: "plus-square",
    icon: "plus",
    component: AddExpenses
  },
  {
    route: "Like",
    label: "Graph",
    type: "thumb",
    icon: "graph",
    component: AddExpenses
  },
  {
    route: "Account",
    label: "Profile",
    type: "Profile",
    icon: "account",
    component: AddExpenses
  }
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 }
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 }
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 }
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const isDarkMode = useColorScheme() === "dark";

  const { colors } = useTheme();
  const color = isDarkMode ? "white" : "black";
  const bgColor = colors.background;

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View
          style={[
            styles.btn,
            { borderColor: bgColor, backgroundColor: bgColor }
          ]}
        >
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            source={item.icon}
            color={focused ? "white" : "black"}
            size={25}
          />
        </View>
        <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70
  },
  tabBar: {
    height: 70,
    position: "absolute",
    margin: 16,
    borderRadius: 16
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#17B7BD",
    borderRadius: 25
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "black",
    fontWeight: "500"
  }
});
