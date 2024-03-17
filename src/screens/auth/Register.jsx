import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState } from "react";
import InputLabel from "../../components/UI/InputLabel";
import { GradientHeader } from "../../components/typography";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../../components/UI/Button";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { SignUpSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { writeDataToFirestore } from "../../fetch";

const Register = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginError, setLoginError] = useState("");
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

  const auth = FIREBASE_AUTH;

  const onSubmit = async (data) => {
    console.log(
      loginError.length,
      isLoggedIn,
      isLoggedIn !== null || loginError,
      data
    );
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await writeDataToFirestore("users", {
        name: data.name,
        email: data.email
      });
      showMessage({
        message: "User successfully registered",
        type: "success"
      });
      reset({
        email: "",
        password: "",
        confirm_password: ""
      });
    } catch (error) {
      setIsLoggedIn(false);
      if (error.code === "auth/too-many-requests") {
        setLoginError(
          "Too many request, Please reset Password or Try again later"
        );
        showMessage({
          message: loginError,
          type: "danger"
        });
      } else if (error.code === "auth/email-already-in-use") {
        setLoginError("User already exists");
        showMessage({
          message: loginError,
          type: "danger"
        });
      }
    }
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: Platform.OS === "android" && 50 }}
    >
      <FlashMessage
        duration={3000}
        position={"top"}
        textStyle={{ textAlign: "center" }}
      />
      <KeyboardAvoidingView
        behavior="padding"
        className="px-5 flex-1 justify-between"
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="gray"
          onPress={() => navigation.goBack()}
        />
        <View className=" h-[60vh] justify-around">
          <GradientHeader text="Register Now Free" />
          <View className="items-center gap-y-3">
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
                    value={value}
                    error={errors.name}
                    isValid={isDirty && !errors.name && isSubmitted}
                  />
                )}
                name="name"
              />
              {errors.name && (
                <Text className="text-red-500 pt-1">{errors.name.message}</Text>
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
                    value={value}
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
            <View>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Password"
                    secureTextEntry={true}
                    onChange={onChange}
                    value={value}
                    error={errors.password}
                    isValid={isDirty && !errors.password && isSubmitted}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text className="text-red-500 pt-1">
                  {errors.password.message}
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
                    label="Repeat password"
                    secureTextEntry={true}
                    onChange={onChange}
                    value={value}
                    error={errors.confirm_password}
                    isValid={isDirty && !errors.confirm_password && isSubmitted}
                  />
                )}
                name="confirm_password"
              />
              {errors.confirm_password && (
                <Text className="text-red-500 pt-1">
                  {errors.confirm_password.message}
                </Text>
              )}
            </View>
          </View>
          <Button
            backgroundStyle={"gradient"}
            title="Register"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
