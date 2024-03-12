import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

const GradientText = ({ ...rest }) => {
  return (
    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...rest} style={[rest.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export const GradientHeader = ({ text, colors }) => {
  return (
    <GradientText colors={colors}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{text}</Text>
    </GradientText>
  );
};
