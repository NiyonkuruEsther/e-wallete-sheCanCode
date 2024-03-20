import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { heightFull, widthFull } from "./Splash";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { readUsers } from "../fetch";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { SignUpSchema } from "../schema";
import { GradientHeader } from "../components/typography";
import InputLabel from "../components/UI/InputLabel";
import Button from "../components/UI/Button";

const Profile = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const currentUser = auth.currentUser;
  const [user, setUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  useEffect(() => {
    (async () => {
      const users = await readUsers();
      users.forEach((user) => {
        user?.data?.email === currentUser?.email && setUser(user.data);
      });
    })();
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
    watch,
    reset,
    clearErrors
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  });
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
          <Text className="text-base font-semibold">{user?.name}</Text>
          <Text className="text-bluePrimary font-semibold">
            {currentUser?.email}
          </Text>
        </View>

        <View className="self-start px-5 pt-10 ">
          <Pressable
            onPress={() => {
              setEditProfile(true);
            }}
            className="flex-row items-center gap-4 pb-7"
          >
            <AntDesign name="edit" style={{ color: "gray", fontSize: 25 }} />
            <Text className="text-lg">Edit Profile</Text>
          </Pressable>

          {editProfile && (
            <Modal>
              <KeyboardAvoidingView
                behavior="padding"
                className=" bg-transparent h-full items-center justify-center"
                // className="px-5 justify-between bg-white h-[60vh] w-[80vw]"
              >
                <SafeAreaView className="bg-white">
                  <View className="">
                    <View className="items-center gap-y-3 pb-5">
                      <View>
                        <Controller
                          control={control}
                          rules={{
                            required: true
                          }}
                          render={({ field: { onChange, value } }) => (
                            <InputLabel
                              label="Your name"
                              onChange={onChange}
                              value={currentUser?.name}
                              error={errors.name}
                              isValid={isDirty && !errors.name && isSubmitted}
                            />
                          )}
                          name="name"
                        />
                        {errors.name && (
                          <Text className="text-red-500 pt-1">
                            {errors.name.message}
                          </Text>
                        )}
                      </View>
                      <View>
                        <Controller
                          control={control}
                          rules={{
                            required: true
                          }}
                          render={({ field: { onChange, value } }) => (
                            <InputLabel
                              label=" Email"
                              onChange={onChange}
                              value={currentUser?.email}
                              error={errors.email}
                              isValid={isDirty && !errors.email && isSubmitted}
                            />
                          )}
                          name="email"
                        />
                        {errors.email && (
                          <Text className="text-red-500 pt-1">
                            {errors.email.message}
                          </Text>
                        )}
                      </View>
                    </View>
                    <View className="flex-row px-5">
                      <View className="w-1/2 pr-3">
                        <Button
                          backgroundStyle={"gradient"}
                          title="Save"
                          onPress={handleSubmit()}
                        />
                      </View>
                      <Pressable className="w-1/2 pl-3">
                        <Button
                          backgroundStyle={"gradient"}
                          title="Close"
                          onPress={() => {
                            setEditProfile(false);
                            clearErrors(["name", "email"]);
                          }}
                        />
                      </Pressable>
                    </View>
                  </View>
                </SafeAreaView>
              </KeyboardAvoidingView>
            </Modal>
          )}

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

          <Pressable
            onPress={() => {
              auth.signOut();
              navigation.navigate("Welcome");
            }}
            className="flex-row items-center gap-4"
          >
            <AntDesign
              name="logout"
              style={{ color: "#CC0000", fontSize: 25 }}
            />
            <Text className="text-lg">Logout</Text>
          </Pressable>
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
