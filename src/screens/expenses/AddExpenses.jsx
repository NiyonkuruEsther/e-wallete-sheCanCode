import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Button
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { heightFull, widthFull } from "../Splash";
import { Dropdown } from "react-native-element-dropdown";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Camera, CameraType } from "expo-camera";
import { ScrollView } from "react-native-gesture-handler";

const AddExpenses = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [cam, setCam] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned!");
  const [hasScanned, setHasScanned] = useState([]);
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

  const [selectedValue, setSelectedValue] = useState("food");
  const [expensesData, setExpensesData] = useState({
    name: "Fanta",
    category: "Food",
    amount: 600,
    date: new Date(),
    invoice: []
  });

  async function toggleCameraType() {
    await Camera.requestCameraPermissionsAsync();
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const optionData = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" }
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);

    if (!hasScanned.includes(data)) {
      const updatedScannedItems = [...hasScanned, data];
      setExpensesData({
        ...expensesData,
        invoice: updatedScannedItems
      });

      setHasScanned(updatedScannedItems);
    } else {
      console.log("Item already exists");
    }
  };

  return (
    <Pressable className="flex-1 relative" onPress={dismissKeyboard}>
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
          Add Expenses
        </Text>
      </View>
      <View className="absolute rounded-[20px] bg-white h-[60vh] top-[18vh] w-[88vw] right-[6vw] px-5 justify-around shadow-lg">
        <View className="gap-y-3">
          <Text>CATEGORY</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={optionData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
            renderItem={renderItem}
          />
        </View>
        <View className="gap-y-3">
          <Text>NAME</Text>
          <View className="group flex-row justify-between border border-lighGray rounded-lg h-[5vh] items-center px-3 focus:border-bluePrimary focus:border-2 ">
            <TextInput
              placeholder="Expense name"
              style=""
              className="h-full flex-1"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View className="gap-y-3">
          <Text>AMOUNT</Text>
          <View className="group flex-row justify-between border border-lighGray rounded-lg h-[5vh] items-center px-3 focus:border-bluePrimary focus:border-2 ">
            <TextInput
              placeholder="Enter amount"
              style=""
              className="h-full flex-1"
              keyboardType="numeric"
            />
            <Text className="">Clear</Text>
          </View>
        </View>
        <View className="gap-y-3">
          <View className=" flex-row justify-between items-center">
            <Text>DATE</Text>
          </View>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            className=" flex-row justify-end border border-lighGray rounded-lg "
          >
            <RNDateTimePicker
              mode="date"
              accentColor="#17B7BD"
              minimumDate={new Date()}
              themeVariant=""
              value={new Date()}
              display="compact"
              style={{
                height: (heightFull * 4.5) / 100
              }}
            />
          </TouchableOpacity>
        </View>

        <View className="gap-y-3">
          <Text>INVOICE</Text>
          <TouchableOpacity
            onPress={() => {
              setCam(true);
              toggleCameraType();
            }}
            className="flex-row justify-center items-center py-2 border border-lighGray rounded-lg"
          >
            <View className="bg-gray-600  px-2 py-1 rounded-full mr-3">
              <Text className=" text-white">+</Text>
            </View>
            <Text style={{ color: "#000" }}>Add Invoice</Text>
          </TouchableOpacity>
        </View>
      </View>
      {cam && permission.granted && (
        <ScrollView
          className="absolute top-0 h-full w-full bg-white "
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Camera
            type={CameraType.back}
            className="w-[60vw] h-[30vh] mb-3"
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
          {console.log(hasScanned)}

          {hasScanned.map((item, index) => (
            <View key={index} className="px-5">
              <Text style={{ paddingVertical: 7 }}>
                {index + 1}.{item}
              </Text>
            </View>
          ))}

          <View
            style={{
              paddingTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              title="Scan Again"
              backgroundColor="#2c2f99"
              color="black"
              onPress={() => setScanned(false)}
            />
            <Pressable onPress={() => setCam(false)}>
              <Text className="text-base">Close camera</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull * 0.32,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    overflow: "hidden",
    transform: [{ scaleX: 2 }]
  },
  dropdown: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  icon: {
    marginRight: 5
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textItem: {
    flex: 1
  },

  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40
  }
});

export default AddExpenses;
