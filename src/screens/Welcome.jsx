import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";

const WelcomePage = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <LinearGradient
      colors={["#7DDF9D", "#17B7BD"]}
      style={{ flex: 1 }}
      className="px-5"
    >
      <View className="gap-y-5  flex-1 justify-end pb-[10vh]">
        <View className="self-start">
          <Button title="D" backgroundStyle={"white"} />
        </View>

        <View className="gap-y-1">
          <Text
            style={{ fontSize: 24, fontWeight: "bold" }}
            className="text-white pb-3"
          >
            Welcome
          </Text>
          <Text className=" text-[19px] text-white">Easiest way</Text>
          <Text className=" text-[19px] text-white">Manage Your Money</Text>
        </View>
        <View className="pb-5 ">
          <Button
            title="Login"
            backgroundStyle={"white"}
            onPress={() => navigation.navigate("Login")}
          />
        </View>

        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", marginTop: windowHeight * 0.01 }}>
            Terms Or Services
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomePage;
