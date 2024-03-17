import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import TabButton from "./bottomNavigation/TabButton";
import { TabArr } from "../../data/routes";

const Tab = createBottomTabNavigator();

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
    height: 70,
    position: "relative"
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
  },
  circleOne: {
    backgroundColor: "#f52d56",
    width: 40,
    height: 40,
    // bottom: 40,
    // right: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
