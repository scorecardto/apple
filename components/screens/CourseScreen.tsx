import React from "react";
import { Text, View } from "react-native";
import { MobileDataContext } from "../core/context/MobileDataContext";
import { DataContext } from "scorecard-types";
import Header from "../text/Header";
import { RadialGradient } from "react-native-gradients";

export default function CourseScreen({ route, navigation }) {
  const { key } = route.params;

  const dataContext = React.useContext(DataContext);

  const course = dataContext.data?.courses.find((c) => c.key === key);

  if (course == null) {
    return (
      <View>
        <Text>Course not found</Text>
      </View>
    );
  }

  const colorList = [
    { offset: "0%", color: "#FFCBD6", opacity: "1" },
    { offset: "100%", color: "#FFCBD6", opacity: "0" },
  ];

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          zIndex: 1,
        }}
      >
        <Header header={course.name} />
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <RadialGradient
          x="50%"
          y="0"
          rx="384"
          ry="288"
          colorList={colorList}
        ></RadialGradient>
      </View>
    </View>
  );
}
