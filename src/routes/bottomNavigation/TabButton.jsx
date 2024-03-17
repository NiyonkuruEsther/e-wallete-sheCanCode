import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from "react-native-paper";

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

  useEffect(() => {
    if (!showAddOptions) {
      setTimeout(() => {
        setShowAddOptions(false);
      }, 700);
    }
  }, [showAddOptions]);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        if (item.label === "Add") {
          setShowAddOptions(!showAddOptions);
        }
      }}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View>
          {item.label === "Add" && showAddOptions ? (
            <Animatable.View
              style={{
                flex: 1
              }}
              className={`flex-row -left-[6vh] gap-5 absolute bottom-[1vh] ${
                showAddOptions === false && "bg-black"
              }`}
            >
              <View>
                <TouchableOpacity
                  style={styles.circleOne}
                  className="rotate-180"
                >
                  <Ionicons name="enter-outline" size={25} color="#FFFF" />
                </TouchableOpacity>
                <Text>Topup</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Add expenses");
                    setShowAddOptions(false);
                  }}
                  style={styles.circleOne}
                >
                  <Ionicons name="log-in-outline" size={25} color="#FFFF" />
                </TouchableOpacity>
                <Text>Expense</Text>
              </View>
            </Animatable.View>
          ) : (
            console.log(
              item.label === "Add" && showAddOptions === false,
              "logged"
            )
          )}
        </View>

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
