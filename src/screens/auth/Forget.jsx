import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputLabel from "../../components/UI/InputLabel";
import { GradientHeader } from "../../components/typography";
import Button from "../../components/UI/Button";

function Forget({ navigation }) {
  return (
    <>
      <View style={{ paddingLeft: 15 }}>
        <MaterialCommunityIcons
          name="arrow-left"
          style={{ paddingTop: Platform.OS === "android" && 50 }}
          size={25}
          color={"#black"}
        />
        <View style={{ height: 80 }}></View>
        <GradientHeader text={"Forget Password"} />
        <View style={{ height: 40 }}></View>
        <InputLabel label={"email"} />
      </View>
      <View style={{ height: 50 }}></View>
      <View style={{ paddingRight: 10, marginLeft: 10 }}>
        <Button title="Send" backgroundStyle={"gradient"} />
      </View>
    </>
  );
}

export default Forget;
