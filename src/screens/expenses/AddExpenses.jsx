import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Picker } from '@react-native-picker/picker'; 
import { heightFull, widthFull } from "../Splash";

const AddExpenses = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const [selectedValue, setSelectedValue] = useState("food");
  const [selectedDate, setSelectedDate] = useState('');

  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View className="flex-1 relative">
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.oval}
      >
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,paddingTop:70}}>
          <TouchableOpacity>
            <AntDesign name='caretleft' style={{ color: 'white', fontSize: 20 }} />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>Expenses</Text>
          <TouchableOpacity>
            <AntDesign name='dotchart' style={{ color: 'white', fontSize: 20 }} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View className="absolute rounded-[20px] bg-white h-[55vh] top-[27vh] w-[80vw] right-[10vw] px-5 gap-y-5" style={{ ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  }),justifyContent:'center'}}>
        <View >
          <Text >CATEGORY</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              style={{ height:29, width: '100%', marginBottom: 10, padding: 5 }}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Transport" value="transport" />
              <Picker.Item label="School Expenses" value="school-expenses" />
            </Picker>
          </View>
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

        <View>
          <Text>Date</Text>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              padding: 10,
              borderWidth: 1,
            }}
          >
            <AntDesign name="calendar" size={20} color="#000" style={{ marginRight: 10 }} />
            <Text>{selectedDate}</Text>
          </TouchableOpacity>

   <Text>Invoices</Text>
  <TouchableOpacity
    style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5, padding: 10, borderWidth: 1 }}
    onPress={() => alert('Add Invoice')}
  >
    <Text style={{ color: '#000' }}> <AntDesign name="plus" size={22} color="#000" style={{backgroundColor:'lightblue' }} />  Add Invoice</Text>
  </TouchableOpacity>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull / 2.5,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    transform: [{ scaleX: 1.7 }]
  },
  pickerContainer:{
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default AddExpenses;
