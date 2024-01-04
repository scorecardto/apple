import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import SmallText from "../../text/SmallText";

export default function TableRow(props: {
  name: string;
  grade: string;
  worth: string;
  red?: {
    name?: boolean;
    grade?: boolean;
    worth?: boolean;
  };
  onPress?: () => void;
}) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      borderTopWidth: 1,
      borderTopColor: colors.borderNeutral,
      width: "100%",
    },
    content: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",

      width: "100%",
    },
    name: {
      fontSize: 16,
      flexShrink: 1,
      flexGrow: 0,
      flexWrap: "wrap",
      color: props.red?.name ? "red" : colors.primary,
    },
    right: {
      marginLeft: 24,
      flexDirection: "column",
      alignItems: "flex-end",
      flexShrink: 0,
      flexGrow: 1,
    },
    grade: {
      fontSize: 14,
      color: props.red?.grade ? "red" : colors.primary,
    },
    worth: {
      fontSize: 14,
      color: props.red?.worth ? "red" : colors.text,
    },
  });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.content} onPress={props.onPress}>
        <SmallText style={styles.name}>{props.name}</SmallText>
        <View style={styles.right}>
          <SmallText style={styles.grade}>{props.grade}</SmallText>
          <SmallText style={styles.worth}>{props.worth}</SmallText>
        </View>
      </TouchableOpacity>
    </View>
  );
}