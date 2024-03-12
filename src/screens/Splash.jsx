import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { SPLASH } from "../../data/splash";
import { LinearGradient } from "expo-linear-gradient";
import Typography from "../components/typography";

export const heightFull = Dimensions.get("window").height;
export const widthFull = Dimensions.get("window").width;

const Splash = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemWidth = widthFull - 20;

  const getImageSource = (imgName) => {
    switch (imgName) {
      case "image1":
        return require("../../assets/splashScreen/image1.png");
      case "image2":
        return require("../../assets/splashScreen/image2.png");
      case "image3":
        return require("../../assets/splashScreen/image3.png");
      default:
        return null;
    }
  };
  const renderItem = ({ item }) => {
    const imageSource = getImageSource(item.imgName);

    return (
      <TouchableOpacity className="px-5 gap-y-5">
        {imageSource && <Image source={imageSource} className="h-max mb-5" />}
        <Typography text={item.heading} />
        <Text className=" text-[19px] text-gray-400 dark:text-white ">
          {item.paragraph}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 justify-center ">
      <View className="gap-y-5">
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
      </View>
    </SafeAreaView>
  );
};

export default Splash;
