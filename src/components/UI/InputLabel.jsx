import { View, Text, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { widthFull } from "../../screens/Splash";

const InputLabel = ({
  iconName,
  label,
  secureTextEntry,
  onChange,
  value,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ width: widthFull - 40 }}>
      <TextInput
        label={label}
        mode="flat"
        textColor="black"
        secureTextEntry={!showPassword && secureTextEntry}
        onChangeText={onChange}
        value={value}
        error={error}
        right={
          <TextInput.Icon
            icon={
              !secureTextEntry && error === "false"
                ? "check-circle"
                : secureTextEntry
                ? showPassword
                  ? "eye"
                  : "eye-off"
                : ""
            }
            size={25}
            color={error === "" ? "#17B7BD" : error ? "#8B0000" : "gray"}
            style={{ paddingHorizontal: 0 }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        style={{
          backgroundColor: "transparent",
          paddingHorizontal: 0,
          color: "black"
        }}
        theme={{
          colors: {
            primary: error === false ? "#17B7BD" : "gray",
            text: "black",
            underlineColor: "transparent"
          }
        }}
      />
    </View>
  );
};

export default InputLabel;
