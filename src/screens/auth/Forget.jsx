import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  Platform
} from "react-native";
import React, { useState } from "react";
import InputLabel from "../../components/UI/InputLabel";
import { GradientHeader } from "../../components/typography";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../../components/UI/Button";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, SignUpSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FlashMessage, { showMessage } from "react-native-flash-message";

function Forget({ navigation }) {
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
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required("Email is required").email("Invalid email")
      })
    ),
    defaultValues: {
      email: ""
    }
  });

  const auth = FIREBASE_AUTH;

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      console.log("Reset link sent");

      showMessage({
        message: "Reset link sent",
        type: "success"
      });
      // reset({
      //   email: ""
      // });
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
      if (error.code === "auth/too-many-requests") {
        setLoginError(
          "Too many request, Please reset Password or Try again later"
        );
        showMessage({
          message: "Too many request, Please reset Password or Try again later",
          type: "danger"
        });
      } else if (error.code === "auth/invalid-credential") {
        setLoginError("Invalid credentials");
        showMessage({
          message: "Invalid credentials",
          type: "danger"
        });
      } else if (error.code === "auth/network-request-failed") {
        setLoginError("Network failed");
        showMessage({
          message: "Network failed",
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
        <KeyboardAvoidingView
          behavior="padding"
          className="h-[44vh] justify-between"
        >
          <AntDesign
            name="arrowleft"
            size={25}
            color="gray"
            onPress={() => navigation.goBack()}
          />
          <GradientHeader text="Forgot Password" />

          <View className="h-[20vh] justify-between">
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
              <Text className="text-red-500 pt-1">{errors.email.message}</Text>
            )}
            <Button
              backgroundStyle={"gradient"}
              title="Send"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </KeyboardAvoidingView>
        <View></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Forget;
