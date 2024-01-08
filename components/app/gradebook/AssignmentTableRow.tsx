import { View, Text } from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Assignment } from "scorecard-types";
import TableRow from "./TableRow";
import BottomSheetContext from "../../util/BottomSheet/BottomSheetContext";
import AssignmentSheet from "./sheets/AssignmentSheet";
import AssignmentEdits from "../../../lib/types/AssignmentEdits";

export default function AssignmentTableRow(props: {
  assignment: Assignment;
  testing: boolean;
  removeAssignment(): void;
  setModifiedAssignment(a: Assignment): void;
}) {
  const assignment = props.assignment;
  const sheets = useContext(BottomSheetContext);

  const [grade, setGrade] = useState(assignment.grade);
  const [points, setPoints] = useState(assignment.points);
  const [maxPoints, setMaxPoints] = useState(assignment.max);
  const [count, setCount] = useState(assignment.count);
  const [dropped, setDropped] = useState(assignment.dropped);

  useEffect(() => {
    if (
      props.testing ||
      grade !== assignment.grade ||
      points !== assignment.points ||
      maxPoints !== assignment.max ||
      count !== assignment.count ||
      dropped !== assignment.dropped
    ) {
      props.setModifiedAssignment({
        ...assignment,
        grade,
        points,
        max: maxPoints,
        count,
        dropped,
      });
    } else {
      props.setModifiedAssignment(null);
    }
  }, [grade, points, maxPoints, count, dropped]);

  const worth = (details: { count: number; dropped: boolean }) => {
    return details.dropped
      ? "Dropped"
      : details.count.toString() + "pt" + (details.count === 1 ? "" : "s");
  };

  const currentEdits: AssignmentEdits = {
    count: count,
    pointsEarned: points,
    pointsPossible: maxPoints,
    dropped: dropped,
  };
  return (
    <TableRow
      name={assignment.name!}
      grade={grade!}
      worth={worth({ count, dropped })}
      red={{
        name: props.testing,
        grade: props.testing || assignment.grade !== grade,
        worth:
          props.testing ||
          worth({ count, dropped }) !==
            worth({ count: assignment.count, dropped: assignment.dropped }),
      }}
      onPress={() => {
        sheets.addSheet(({ close }) => (
          <>
            <AssignmentSheet
              assignment={assignment}
              testing={props.testing}
              close={close}
              currentEdits={currentEdits}
              removeAssignment={props.removeAssignment}
              edit={(edits) => {
                  // returns whether the assignment was modified
                  let ret = false;
                if (
                  edits.pointsEarned != null ||
                  edits.pointsPossible != null
                ) {
                  const rawGrade = edits.pointsEarned / edits.pointsPossible;
                  const rounded = Math.round(rawGrade * 1000) / 10;
                  const grade = rounded+"%";
                  setGrade(grade);
                  setPoints(grade === assignment.grade ?
                      assignment.points : edits.pointsEarned);
                  setMaxPoints(grade === assignment.grade ?
                      assignment.max : edits.pointsPossible);

                  ret = grade !== assignment.grade;
                } else {
                  setPoints(assignment.points);
                  setMaxPoints(assignment.max);
                  setGrade(assignment.grade);
                }

                if (edits.count != null) {
                  setCount(edits.count);
                  ret = true;
                } else {
                  setCount(assignment.count);
                }

                if (edits.dropped === true || edits.dropped === false) {
                  setDropped(edits.dropped);
                  ret = true;
                } else {
                  setDropped(assignment.dropped);
                }

                return ret;
              }}
            />
          </>
        ));
      }}
    />
  );
}
