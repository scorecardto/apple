import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MediumText from "../../text/MediumText";
import SmallText from "../../text/SmallText";
import color from "../../../lib/Color";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import BottomSheetContext from "../../util/BottomSheet/BottomSheetContext";
import MoreFeaturesSheet from "../vip/MoreFeaturesSheet";
import { useSelector } from "react-redux";
import { RootState } from "../../core/state/store";
import useColors from "../../core/theme/useColors";
import useIsDarkMode from "../../core/theme/useIsDarkMode";
export default function InviteOthersCard(props: { show: boolean }) {
  const colors = useColors();
  const dark = useIsDarkMode();

  const invitedNumbers = useSelector(
    (s: RootState) => s.invitedNumbers.numbers
  );

  const accentLabel = "yellow";

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.card,
      borderRadius: 12,
      overflow: "hidden",
      marginBottom: 10,
      marginHorizontal: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      textAlignVertical: "center",
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      overflow: "hidden",
    },
    badge: {
      width: 56,
      height: 56,
      backgroundColor:
        color.AccentsMatrix[accentLabel][dark ? "dark" : "default"].primary,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      paddingLeft: 24,
      color: colors.primary,
      flex: 1,
    },
    grade: {
      marginRight: 24,
      marginLeft: 6,
      fontSize: 16,
      color: colors.text,
    },
  });

  const sheets = useContext(BottomSheetContext);

  const leftText = invitedNumbers === null ? "Customize" : "More Features";

  const rightText =
    invitedNumbers === null
      ? "tap me"
      : invitedNumbers.length === 1
      ? "1 invite left"
      : "tap to invite";
  return (
    <TouchableOpacity
      onPress={() => {
        sheets?.addSheet((p) => {
          return <MoreFeaturesSheet close={p.close} />;
        });
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View style={styles.badge}>
            <MaterialIcon name="star" size={24} color={"white"} />
          </View>
          <MediumText
            numberOfLines={1}
            ellipsizeMode={"tail"}
            style={styles.header}
          >
            {leftText}
          </MediumText>
        </View>
        <SmallText style={styles.grade}>{rightText}</SmallText>
      </View>
    </TouchableOpacity>
  );
}
