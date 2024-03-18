import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";
import { heightFull, widthFull } from "../Splash";
import { Dropdown } from "react-native-element-dropdown";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { writeDataToFirestore, writeTransactions } from "../../fetch";
import FloatingButton from "../../routes/FloatingButton";
import Card from "../../components/UI/Card";


const History = () => {
  return (
    <Pressable className="flex-1 relative">
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.oval}
      ></LinearGradient>
      <View className="absolute flex-row bg-red- top-[8vh] w-full items-center justify-between px-5">
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            style={{ color: "white", fontSize: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 20
          }}
        >
          History
         
        </Text>
      </View>
      <Card style={{position:'absolute'}}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull *0.32,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    transform: [{ scaleX: 1.7 }]
  }
});

export default History;
