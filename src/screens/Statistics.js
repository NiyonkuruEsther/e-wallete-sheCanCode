import {
  View,
  Text,
  Animated,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { GradientHeader } from "../components/typography";
import AntDesign from "react-native-vector-icons/AntDesign";
import { heightFull, widthFull } from "./Splash";
import { LineChart } from "react-native-chart-kit";

const Statistics = () => {
  const [title, setTitle] = useState("Income");
  const [selectedLabel, setSelectedLabel] = useState(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ]
    // legend: ["Rainy Days"]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "2",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => ``,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const handleDataPointClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <View className="pt-[8vh] items-center flex-1">
      <View className="flex-row justify-between self-start w-full pb-8 px-5">
        <TouchableOpacity>
          <AntDesign name="arrowleft" style={{ fontSize: 20 }} />
        </TouchableOpacity>
        <GradientHeader text={"Statistics"} />
      </View>
      <View className="flex-row bg-lighGray rounded-3xl mx-5 mb-12">
        <Pressable
          className={`text-base items-center justify-center ${
            title === "Income" && "bg-bluePrimary text-white"
          }  w-1/2  rounded-3xl`}
          onPress={() => setTitle("Income")}
        >
          <Text
            className={`text-base text-center  ${
              title === "Income" && "text-white"
            } `}
          >
            Income
          </Text>
        </Pressable>
        <Pressable
          className={`text-base py-3 items-center justify-center ${
            title === "Expenses" && "bg-bluePrimary"
          }  w-1/2  rounded-3xl`}
          onPress={() => setTitle("Expenses")}
        >
          <Text
            className={`text-base text-center  ${
              title === "Expenses" && "text-white"
            } `}
          >
            Expenses
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      >
        <LineChart
          data={data}
          width={widthFull}
          withHorizontalLabels={false}
          withInnerLines={true}
          onDataPointClick={({ value, dataset, x, index }) => {
            handleDataPointClick(data.labels[index]);
            // console.log(value, dataset, x, data.labels[index]);
          }}
          style={{
            paddingHorizontal: 0,
            width: widthFull
          }}
          height={heightFull / 5}
          chartConfig={{
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "2",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => ``,
            barPercentage: 0.5,
            useShadowColorFromDataset: true
          }}
          bezier
        />
      </ScrollView>

      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

export default Statistics;
