import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import BottomSheetBase from "@gorhom/bottom-sheet";
import { Assignment } from "scorecard-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import AssignmentEdits from "../../../../../lib/types/AssignmentEdits";
import LargeGradebookSheetTile from "./tiles/LargeGradebookSheetTile";
import AssignmentGradeTile from "./tiles/AssignmentGradeTile";
import AssignmentCountTile from "./tiles/AssignmentCountTile";
import SmallGradebookSheetTileGroup from "./tiles/SmallGradebookSheetTileGroup";

export default function AssignmentSheet(props: {
  assignment: Assignment;
  close(): void;
  edit(e: AssignmentEdits): void;
  currentEdits: AssignmentEdits;
}) {
  const isNumericGrade =
    props.currentEdits?.pointsEarned != null &&
    props.currentEdits?.pointsPossible != null;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log(props);

          props.edit({
            pointsEarned: 1,
            pointsPossible: 2,
          });
        }}
      >
        <Text>{props.assignment.name}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: 12,
        }}
      >
        <AssignmentGradeTile
          grade={
            isNumericGrade
              ? {
                  pointsEarned: props.currentEdits.pointsEarned,
                  pointsPossible: props.currentEdits.pointsPossible,
                }
              : props.assignment.grade
          }
          originalGrade={props.assignment.grade}
          edit={props.edit}
        />
        <SmallGradebookSheetTileGroup>
          <AssignmentCountTile
            count={props.currentEdits.count ?? props.assignment.count}
            originalCount={props.assignment.count}
            edit={props.edit}
          />
        </SmallGradebookSheetTileGroup>
        {/* <View
          style={{
            flexShrink: 1,
            flexGrow: 0,
            flexBasis: "100%",
            width: "100%",
          }}
        >
          <AssignmentCountTile
            count={props.currentEdits.count ?? props.assignment.count}
            originalCount={props.assignment.count}
            edit={props.edit}
          />
          <AssignmentCountTile
            count={props.currentEdits.count ?? props.assignment.count}
            originalCount={props.assignment.count}
            edit={props.edit}
          />
        </View> */}
      </View>
    </View>
  );
}
