import { View, Text } from "react-native";
import React from "react";

export default function LargeText(props) {
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "DMSans_700Bold",
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
}