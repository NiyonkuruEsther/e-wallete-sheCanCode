import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { SPLASH } from "../../data/splash";
import { LinearGradient } from "expo-linear-gradient";

export const heightFull = Dimensions.get("window").height;
export const widthFull = Dimensions.get("window").width;

const Splash = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemWidth = widthFull - 20;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity className="px-4">
        <Text className="text-black dark:text-white text-3xl font-bold">
          {item.heading}
        </Text>
        <Text className=" text-[19px] text-black dark:text-white ">
          {item.paragraph}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={["#7DDF9D", "#17B7BD"]} className="flex-1">
      <SafeAreaView className="flex-1 justify-center gap-y-5 ">
        <Carousel
          ref={carouselRef}
          layout={"default"}
          renderItem={renderItem}
          sliderWidth={widthFull}
          itemWidth={itemWidth}
          data={SPLASH}
          onSnapToItem={(index) => {
            if (index >= 0 && index <= 4) {
              setActiveIndex(index);
            }
          }}
        />
        <TouchableOpacity className="flex-row gap-x-2 pt-2 pl-7">
          {[1, 2, 3].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: index === activeIndex ? "#17B7BD" : "gray",
                width: index === activeIndex ? 50 : 20,
                height: 6
              }}
              className={`rounded-full`}
            ></TouchableOpacity>
          ))}
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});

export default Splash;
