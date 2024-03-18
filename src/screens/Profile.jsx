import { View, Text } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <LinearGradient
        colors={["#7DDF9D", "#17B7BD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.oval}
      ></LinearGradient>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  oval: {
    width: widthFull,
    height: heightFull / 2.5,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    transform: [{ scaleX: 1.7 }]
  }
});
