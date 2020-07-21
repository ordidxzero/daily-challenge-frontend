import React from "react";
import { View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

function ProgressBar({ data }: { data: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: width * 0.65,
          height: 5,
          backgroundColor: "#ecf0f1",
          borderRadius: 3,
          marginRight: 5,
        }}
      ></View>
      <Text style={{ fontSize: 11 }}>{data}%</Text>
    </View>
  );
}

export default ProgressBar;
