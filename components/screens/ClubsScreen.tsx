import { ScrollView, View } from "react-native";
import { useRef, useState } from "react";
import { NavigationProp, useTheme } from "@react-navigation/native";
import Header from "../text/Header";
import ArchiveCourseCard from "../app/archive/ArchiveCourseCard";
import ArchiveDemoTable from "../app/archive/ArchiveDemoTable";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBanner from "../text/HeaderBanner";
import { useSelector } from "react-redux";
import { RootState } from "../core/state/store";
import PageThemeProvider from "../core/context/PageThemeProvider";
import Background from "../util/Background";
import { Course } from "scorecard-types";

export default function ClubsScreen(props: {
  navigation: NavigationProp<any, any>;
}) {
  return (
    <PageThemeProvider
      theme={{
        default: {
          background: "#FFF8FE",
          border: "#FFF2F8",
        },
      }}
    >
      <Background>
        <ScrollView
          scrollEventThrottle={16}
          style={{
            height: "100%",
          }}
        >
          <View
            style={{
              paddingBottom: 72,
              paddingTop: 24,
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
              }}
            ></View>
          </View>
        </ScrollView>
      </Background>
    </PageThemeProvider>
  );
}
