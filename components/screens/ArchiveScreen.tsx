import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import Header from "../text/Header";
import { DataContext } from "scorecard-types";
import ArchiveCourseCard from "../app/archive/ArchiveCourseCard";
import ArchiveDemoTable from "../app/archive/ArchiveDemoTable";

export default function ArchiveScreen() {
  const { colors } = useTheme();

  const data = useContext(DataContext);

  const cellCount =
    Math.ceil((data.data?.gradeCategoryNames.length || 0) / 4) * 4;

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          paddingBottom: 72,
        }}
      >
        <View
          style={{
            zIndex: 1,
          }}
        >
          <Header header="Archive">
            <ArchiveDemoTable
              gradeCategoryNames={data.data?.gradeCategoryNames || []}
            />
          </Header>
        </View>

        <View
          style={{
            paddingHorizontal: 12,
          }}
        >
          {data.data?.courses.map((course, idx) => {
            return (
              <ArchiveCourseCard
                course={course}
                key={idx}
                cellCount={cellCount}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}