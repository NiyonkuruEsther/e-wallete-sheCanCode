c
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { widthFull } from "../../screens/Splash";

const InputLabel = ({
  isValid,
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
              !secureTextEntry && isValid
                ? "check-circle"
                : secureTextEntry
                ? showPassword
                  ? "eye"
                  : "eye-off"
                : error?.message
                ? "close-circle"
                : ""
            }
            size={25}
            color={isValid ? "#17B7BD" : error?.message ? "#8B0000" : "gray"}
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
            primary: isValid ? "#17B7BD" : "gray",
            text: "black",
            underlineColor: "transparent"
          }
        }}
      />
    </View>
  );
};

export default InputLabel;
