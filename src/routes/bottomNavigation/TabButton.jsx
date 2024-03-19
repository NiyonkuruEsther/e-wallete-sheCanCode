import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation, useTheme } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from "react-native-paper";
import OutsidePressHandler from "react-native-outside-press";

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

const TabButton = ({ item, onPress, accessibilityState }) => {
  const navigation = useNavigation();
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const isDarkMode = useColorScheme() === "dark";

  const { colors } = useTheme();
  const color = isDarkMode ? "white" : "black";
  const bgColor = colors.background;
  const [showAddOptions, setShowAddOptions] = useState(false);

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
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          onPress();
          if (item.label === "Add") {
            setShowAddOptions(!showAddOptions);
          }
        }}
        activeOpacity={1}
      >
        <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
          <View>
            <Animatable.View
              style={{
                display: !showAddOptions ? "none" : "flex"
              }}
              className={`flex-row -left-[6vh] gap-5 absolute bottom-[1vh]`}
            >
              <View>
                <TouchableOpacity
                  style={styles.circleOne}
                  className="rotate-180"
                  onPress={() => {
                    navigation.navigate("AddIncome");
                    setShowAddOptions(false);
                  }}
                >
                  <Ionicons name="enter-outline" size={25} color="#FFFF" />
                </TouchableOpacity>
                <Text>Income</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AddExpense");
                    setShowAddOptions(false);
                  }}
                  style={styles.circleOne}
                >
                  <Ionicons name="log-in-outline" size={25} color="#FFFF" />
                </TouchableOpacity>
                <Text>Expense</Text>
              </View>
            </Animatable.View>
          </View>

          <View
            style={[
              styles.btn,
              { borderColor: bgColor, backgroundColor: bgColor }
            ]}
          >
            <Animatable.View ref={circleRef} style={styles.circle} />
            <OutsidePressHandler
              onOutsidePress={() => {
                setShowAddOptions(false);
              }}
            >
              <Icon
                source={item.icon}
                color={focused ? "white" : "black"}
                size={25}
              />
            </OutsidePressHandler>
          </View>
          <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
            {item.label}
          </Animatable.Text>
        </Animatable.View>
      </Pressable>
    </View>
  );
};

export default TabButton;

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
