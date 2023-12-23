import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import SmallText from "../../../text/SmallText";

export default function TableRow(props: {
  name: string;
  grade: string;
  worth: string;
}) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      borderTopWidth: 1,
      borderTopColor: colors.borderNeutral,
      paddingVertical: 12,
      paddingHorizontal: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    name: {
      fontSize: 16,
    },
    right: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
    grade: {
      fontSize: 14,
      color: colors.primary,
    },
    worth: {
      fontSize: 14,
      color: colors.text,
    },
  });
  return (
    <View style={styles.wrapper}>
      <SmallText style={styles.name}>{props.name}</SmallText>
      <View style={styles.right}>
        <SmallText style={styles.grade}>{props.grade}</SmallText>
        <SmallText style={styles.worth}>{props.worth}</SmallText>
      </View>
    </View>
  );
}