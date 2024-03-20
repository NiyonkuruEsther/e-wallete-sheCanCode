import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
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
    <>
    <Pressable className="flex-1 relative">
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.oval}
      ></LinearGradient>
      <View className="absolute flex-row bg-red- top-[8vh] w-full items-center justify-between px-5">
        <TouchableOpacity>
        <Text style={{color:'white',fontSize:20,fontWeight:600}}>  Hello!</Text>
        <Text style={{color:'white',fontSize:25,fontWeight:700}}>  ingabaaya</Text>
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
      <Card />

<View  className='flex-row bg-red- top-[18vh] w-full items-center justify-between px-4"'>
<TouchableOpacity>
        <Text style={{color:'black',fontSize:20, paddingLeft:10}}> Transactions History</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text
          style={{
            color: "grey",
            paddingRight:10
          }}
        >
        see all
        
        </Text>
        </TouchableOpacity>
       


        
</View>
      
<View   className=" flex-row bg-red- top-[20vh] w-full items-center justify-between px-5">
<View style={{ backgroundColor: 'rgb(240,253,255)', padding:8, borderRadius: 5 }}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&usqp=CAU' }}
      style={{ width: 50, height: 50, borderRadius: 50 }}
    />
  </View>
  
    <View style={{paddingRight:70}}>
      <Text style={{ color: 'black', fontSize: 20 }}>Food and Drinks</Text>
      <Text style={{ color: 'grey' }}>Today</Text>
    </View>
  <Text style={{ color: 'green', fontWeight: '500' }}>+ $1000</Text>
</View>


<View   className=" flex-row bg-red- top-[22vh] w-full items-center justify-between px-5">
<View style={{ backgroundColor: 'rgb(240,253,255)', padding:8, borderRadius: 5 }}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5TH69cfv65iJTPuoZ78cQ0oktt-YCPdUAw&usqp=CAU' }}
      style={{ width: 50, height: 50, borderRadius: 50 }}
    />
  </View>
  
    <View style={{paddingRight:60}}>
      <Text style={{ color: 'black', fontSize: 20 }}>Transport and fees</Text>
      <Text style={{ color: 'grey' }}>This week</Text>
    </View>
  <Text style={{ color: 'red', fontWeight: '500' }}>+ $1500</Text>
</View>


<View   className=" flex-row bg-red- top-[24vh] w-full items-center justify-between px-5">
<View style={{ backgroundColor:'rgb(240,253,255)', padding:8, borderRadius: 5 }}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhcSBv-R9ai1XaCPtViPcLvUrsdmBs-8riw&usqp=CAU' }}
      style={{ width: 50, height: 50, borderRadius: 50 }}
    />
  </View>
  
    <View style={{paddingRight:50}}>
      <Text style={{ color: 'black', fontSize: 20 }}>Rent and insurance</Text>
      <Text style={{ color: 'grey' }}>This week</Text>
    </View>
  <Text style={{ color: 'green', fontWeight: '500' }}>+ $2000</Text>
</View>



    </Pressable>
   
       
   </>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull *0.32,
    overflow:'hidden',
    position:'relative',
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    transform: [{ scaleX: 1.7 }]
  }
});

export default History;
