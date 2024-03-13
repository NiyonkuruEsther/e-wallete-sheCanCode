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
  signInWithEmailAndPassword
} from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, SignUpSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FlashMessage, { showMessage } from "react-native-flash-message";

function Login({ navigation }) {
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
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const auth = FIREBASE_AUTH;

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      showMessage({
        message: "User successfully logged in",
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
      } else {
        showMessage({
          message: error.code,
          type: "danger"
        });
        console.log(isLoggedIn !== null || loginError);
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
        <KeyboardAvoidingView
          behavior="padding"
          className=" h-[60vh] justify-around"
        >
          <View className="gap-y-5">
            <GradientHeader text="Hello" />
            <Text className="text-lg text-gray-500">
              Login First to continue
            </Text>
          </View>

          <View className="items-center gap-y-3">
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
              <Pressable
                onPress={() => navigation.navigate("Forget")}
                className="self-end pt-2"
              >
                <Text className=" text-gray-600">Forgot Password?</Text>
              </Pressable>
            </View>
          </View>
          <Button
            backgroundStyle={"gradient"}
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </KeyboardAvoidingView>
        <View></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
