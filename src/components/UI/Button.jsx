import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientHeader } from "../typography";

const Button = ({ onPress, title, backgroundStyle }) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        colors={
          (backgroundStyle === "gradient" && ["#7DDF9D", "#17B7BD"]) ||
          (backgroundStyle === "white" && ["#ffffff", "#ffffff"]) || [
            "transparent",
            "transparent"
          ]
        }
        style={styles.buttonGradient}
        className={`${
          backgroundStyle === undefined ? "border border-white py-5" : "py-4"
        } rounded-xl px-6 items-center w-auto`}
      >
        {backgroundStyle === "white" ? (
          <GradientHeader text={title} />
        ) : (
          <Text style={{ width: "auto" }}>
            <Text style={styles.buttonText}>{title}</Text>
          </Text>
        )}
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto"
  },

  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "center",
    color: "white"
  }
});

export default Button;
