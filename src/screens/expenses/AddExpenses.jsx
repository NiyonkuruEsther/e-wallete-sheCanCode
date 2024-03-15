import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { heightFull, widthFull } from "../Splash";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
// import SelectDropdown from "react-native-select-dropdown";

const AddExpenses = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Social Media", value: "apple" },
    { label: "Apps", value: "banana" },
    { label: "Food", value: "yes" }
  ]);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View className="flex-1 relative">
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.oval}
      ></LinearGradient>
      <View className="absolute rounded-[20px] shadow-md bg-white h-[60vh] top-[20vh] w-[80vw] right-[10vw] px-5 gap-y-5">
        <View>
          <Text>CATEGORY</Text>
          {/* <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            dropdownStyle={{ backgroundColor: "white" }}
            rowStyle={{ padding: 0, backgroundColor: "red" }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          /> */}
        </View>
        <View>
          <Text>AMOUNT</Text>
          <View className="group flex-row justify-between border border-lighGray rounded-xl h-[5vh] items-center px-3 focus:border-bluePrimary focus:border-2 ">
            <TextInput
              placeholder="Enter amount"
              style=""
              className="h-full flex-1"
            />
            <Text className="">Clear</Text>
          </View>
        </View>

        <View></View>
        <View className=" flex-row justify-between items-center">
          <Text>DATE</Text>
          <RNDateTimePicker
            mode="date"
            value={new Date()}
            display="compact"
            style={{ backgroundColor: "white" }}
          />
        </View>
      </View>
    </View>
  );
};

/* Rectangle 9 */

// position: absolute;
// width: 414px;
// height: 287px;
// left: 0px;
// top: 0px;

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull / 2.5,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    backgroundColor: "red",
    transform: [{ scaleX: 1.7 }]
  }
});

export default AddExpenses;
