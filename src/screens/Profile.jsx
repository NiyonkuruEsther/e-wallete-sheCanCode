import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { heightFull, widthFull } from "./Splash";
import AntDesign from "react-native-vector-icons/AntDesign";

const Profile = () => {
  return (
    <View>
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
          Profile
        </Text>
        <View className="">
          <AntDesign name="bells" style={{ color: "white", fontSize: 20 }} />
        </View>
      </View>
      <View className={`absolute top-[23vh] gap-y-3 items-center w-full`}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU",
            height: 120,
            width: 120
          }}
          className="rounded-full"
        />
        <View className="items-center">
          <Text className="text-base font-semibold">John Doe</Text>
          <Text className="text-bluePrimary font-semibold">
            JohnDoe@gmail.com
          </Text>
        </View>

        <View className="self-start px-5 pt-10 ">
          <View className="flex-row items-center gap-4 pb-7">
            <AntDesign name="edit" style={{ color: "gray", fontSize: 25 }} />
            <Text className="text-lg">Edit Profile</Text>
          </View>

          <View className="flex-row items-center gap-4 pb-7">
            <AntDesign
              name="infocirlceo"
              style={{ color: "gray", fontSize: 25 }}
            />
            <Text className="text-lg">About us</Text>
          </View>

          <View className="flex-row items-center gap-4 pb-7">
            <AntDesign name="lock" style={{ color: "gray", fontSize: 25 }} />
            <Text className="text-lg">Policy and security</Text>
          </View>

          <View className="flex-row items-center gap-4">
            <AntDesign
              name="logout"
              style={{ color: "#CC0000", fontSize: 25 }}
            />
            <Text className="text-lg">Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull * 0.32,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    overflow: "hidden",
    transform: [{ scaleX: 2 }]
  }
});
