import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import { Assignment, Course, GradeCategory } from "scorecard-types";
import GradebookCard from "./GradebookCard";
import CategoryTable from "./CategoryTable";
// import Carousel, { Pagination } from "react-native-snap-carousel";
import SummaryTable from "./SummaryTable";
// import { set } from "react-native-reanimated";
import {
  averageAssignments,
  averageGradeCategories,
} from "../../../lib/gradeTesting";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BottomSheetContext from "../../util/BottomSheet/BottomSheetContext";
import AddCategorySheet from "./sheets/AddCategorySheet";
import useAccents from "../../core/theme/useAccents";
import GradebookInfoCard from "./GradebookInfoCard";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

function Gradebook(props: {
  course: Course;
  oldGradingPeriodLastUpdated?: string;
  setModifiedGrade(avg: string | null): void;
  refreshOldGradingPeriod?(): void;
  resetKey?: string;
}) {
  const sheets = useContext(BottomSheetContext);

  const accents = useAccents();
  const ref = useRef<Carousel<GradeCategory | null>>(null);

  //   const cardAnimation = useDynamicAnimation(() => ({
  //     opacity: 1,
  //     translateX: 0,
  //   }));

  const [animatedIndex, setAnimatedIndex] = useState(0);

  const [currentCard, setCurrentCard] = useState(0);

  const [isGradeModified, setIsGradeModified] = useState(false);
  const [animatingCard, setAnimatingCard] = useState(-1);

  type CategoryMod = {
    assignments: (Assignment | null)[] | null;
    average: string | null;
    exactAverage: string | null;
  };

  const [categories, setCategories] = useState(props.course.gradeCategories!);
  const [modifiedCategories, setModifiedCategories] = useState<CategoryMod[]>(
    categories.map((_) => {
      return { assignments: null, average: null, exactAverage: null };
    })
  );
  const [exactAverage, setExactAverage] = useState(0);
  const [exactAverages, setExactAverages] = useState<(string | null)[]>(
    averageAssignments(categories, []).map((i) => i?.toFixed(2))
  );
  const [numTestAssignments, setNumTestAssignments] = useState(1);
  const [numTestCats, setNumTestCats] = useState(1);

  const updateAverage = (categoryMods: CategoryMod[], catIdx?: number) => {
    const averages = averageAssignments(
      categories,
      categoryMods.map((c) => c.assignments)
    );

    if (catIdx !== undefined) {
      if (categoryMods[catIdx].assignments!.every((as) => as === null)) {
        categoryMods[catIdx].assignments =
          categoryMods[catIdx].average =
          categoryMods[catIdx].exactAverage =
            null;
      } else {
        if (isNaN(averages[catIdx])) {
          categoryMods[catIdx].average = categoryMods[catIdx].exactAverage =
            "NG";
        } else {
          categoryMods[catIdx].average = "" + Math.round(averages[catIdx]);
          categoryMods[catIdx].exactAverage = averages[catIdx].toFixed(2);
        }
      }
    }

    if (
      categoryMods.every(
        (c) => c.assignments?.every((as) => as === null) ?? true
      ) &&
      categories.length == props.course.gradeCategories?.length
    ) {
      props.setModifiedGrade(null);

      setIsGradeModified(false);

      const cats: GradeCategory[] = new Array(averages.length)
        .fill(0)
        .map((_, i) => {
          const weight = categories[i].weight ?? 0;
          return {
            ...categories[i],
            average: averages[i].toString(),
            weight: weight,
          };
        });

      setExactAverage(averageGradeCategories(cats));
    } else {
      const cats: GradeCategory[] = new Array(averages.length)
        .fill(0)
        .map((_, i) => {
          const weight = categories[i].weight ?? 0;
          return {
            ...categories[i],
            average: averages[i].toString(),
            weight: weight,
          };
        });
      const avg = averageGradeCategories(cats);

      props.setModifiedGrade(isNaN(avg) ? "NG" : "" + Math.round(avg));

      setIsGradeModified(true);
      setExactAverage(avg);
    }
  };

  // update the course average any time a test category is added/remove
  // should NOT depend on modifiedCategories
  useEffect(() => {
    updateAverage(modifiedCategories);
  }, [categories]);

  const lastUpdatedText = useMemo(() => {
    if (
      props.oldGradingPeriodLastUpdated === "" ||
      props.oldGradingPeriodLastUpdated == null
    ) {
      return null;
    }

    const lastUpdated = new Date(props.oldGradingPeriodLastUpdated);

    const now = new Date();

    const diff = now.getTime() - lastUpdated.getTime();

    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "This is a saved copy of an old grading period. It was last updated today.";
    } else if (diffDays === 1) {
      return "This is a saved copy of an old grading period. It was last updated yesterday.";
    } else {
      return `This is a saved copy of an old grading period. It was last updated ${diffDays} days ago.`;
    }
  }, [props.oldGradingPeriodLastUpdated]);

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Pagination
        dotsLength={(categories.length ?? 0) + 1}
        activeDotIndex={currentCard}
        containerStyle={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingVertical: 0,
          paddingHorizontal: 0,
          marginBottom: 16,
        }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: accents.primary,
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={1}
      />

      <Carousel
        ref={ref}
        data={[null, ...categories]}
        renderItem={({ item, index }) => {
          if (!item) {
            return (
              <View>
                {lastUpdatedText && (
                  <GradebookInfoCard
                    header="Old Grading Period"
                    text={lastUpdatedText}
                    buttonText="Refresh"
                    onPress={props.refreshOldGradingPeriod || (() => {})}
                  />
                )}

                <GradebookCard
                  key={index}
                  title="Summary"
                  bottom={{
                    Weight: { text: "100%", red: false },
                    "Exact Average": {
                      text: `${exactAverage.toFixed(2)}`,
                      red: isGradeModified,
                    },
                  }}
                  removable={false}
                  remove={() => {}}
                  buttonAction={() => {
                    const existingWeight =
                      100 -
                      categories.reduce((sum, category) => {
                        return sum + (category.weight ?? 0);
                      }, 0);

                    sheets?.addSheet(({ close }) => (
                      <>
                        <AddCategorySheet
                          close={close}
                          suggestWeight={
                            existingWeight < 100 ? 100 - existingWeight : 100
                          }
                          add={(weight, newAverage) => {
                            setCategories((oldCategories) => {
                              const newCategories = [...oldCategories];
                              newCategories.push({
                                name: "Test Category " + numTestCats,
                                id: "",
                                weight: weight,
                                average: `${newAverage}`,
                                error: false,

                                assignments: [
                                  {
                                    name: "Starting Average",
                                    points: newAverage,
                                    max: 100,
                                    grade: `${newAverage}%`,
                                    dropped: false,
                                    scale: 100,
                                    count: 1,
                                    error: false,
                                  },
                                ],
                              });
                              setNumTestCats(numTestCats + 1);

                              setTimeout(() => {
                                ref.current?.snapToItem(categories.length + 1);
                              }, 100);
                              return newCategories;
                            });
                            setExactAverages((averages) => {
                              const newAverages = [...averages];
                              newAverages.push("NG");
                              return newAverages;
                            });
                            setModifiedCategories((oldCategories) => {
                              const newCategories = [...oldCategories];
                              newCategories.push({
                                assignments: null,
                                average: null,
                                exactAverage: null,
                              });
                              return newCategories;
                            });
                          }}
                        />
                      </>
                    ));
                  }}
                >
                  <SummaryTable
                    course={props.course}
                    categories={categories}
                    modified={modifiedCategories}
                    changeGradeCategory={(c) => {
                      ref.current?.snapToItem(c + 1);
                      setAnimatedIndex(c + 1);
                      setAnimatingCard(c);
                      setTimeout(() => {
                        setAnimatingCard(-1);
                      }, 300);
                    }}
                  />
                </GradebookCard>
              </View>
            );
          }
          const gradeText =
            "" + (modifiedCategories[index - 1].average ?? item.average);
          const testing = index > props.course.gradeCategories!.length;
          return (
            <View
            // animate={{
            //   opacity:
            //     index - 1 === animatingCard || animatingCard === -1 ? 1 : 0.2,
            // }}
            // transition={{
            //   type: "timing",
            //   duration: 0,
            // }}
            >
              <GradebookCard
                key={index}
                title={item.name}
                grade={{
                  text: gradeText ? gradeText : "NG",
                  red:
                    testing || modifiedCategories[index - 1].average !== null,
                }}
                bottom={{
                  Weight: { text: `${item.weight}%`, red: testing },
                  "Exact Average": {
                    text: `${
                      modifiedCategories[index - 1].exactAverage ??
                      exactAverages[index - 1]
                    }`,
                    red:
                      testing || modifiedCategories[index - 1].average !== null,
                  },
                }}
                removable={testing}
                remove={() => {
                  setCategories((oldCategories) => {
                    oldCategories.splice(index - 1, 1);
                    return [...oldCategories];
                  });
                  setModifiedCategories((oldCategories) => {
                    oldCategories.splice(index - 1, 1);
                    return [...oldCategories];
                  });
                  setExactAverages((oldAverages) => {
                    oldAverages.splice(index - 1, 1);
                    return [...oldAverages];
                  });
                  ref.current?.snapToItem(0);
                }}
                buttonAction={() => {
                  setModifiedCategories((categories) => {
                    const catIdx = index - 1;
                    const newCategories = [...categories];
                    if (newCategories[catIdx].assignments === null) {
                      newCategories[catIdx].assignments = new Array(
                        item?.assignments?.length
                      ).fill(null);
                    }
                    newCategories[catIdx].assignments!.push({
                      name: "Test Assignment " + numTestAssignments,
                      points: 100,
                      grade: "100%",
                      dropped: false,
                      scale: 100,
                      count: 1,
                      error: false,
                    });
                    setNumTestAssignments(numTestAssignments + 1);
                    updateAverage(newCategories, catIdx);
                    return newCategories;
                  });
                }}
              >
                <CategoryTable
                  category={item}
                  modifiedAssignments={
                    modifiedCategories[index - 1].assignments
                  }
                  removeAssignment={(idx: number) => {
                    setModifiedCategories((categories) => {
                      const catIdx = index - 1;
                      const newCategories = [...categories];
                      if (newCategories[catIdx].assignments !== null) {
                        newCategories[catIdx].assignments!.splice(idx, 1);
                      }
                      updateAverage(newCategories, catIdx);
                      return newCategories;
                    });
                  }}
                  modifyAssignment={(a: Assignment, idx: number) => {
                    setModifiedCategories((oldCategories) => {
                      const catIdx = index - 1;
                      const newCategories = [...oldCategories];
                      if (newCategories[catIdx].assignments === null) {
                        if (a === null) {
                          return oldCategories;
                        }
                        newCategories[catIdx].assignments = new Array(
                          item?.assignments?.length
                        ).fill(null);
                      }
                      newCategories[catIdx].assignments![idx] = a;
                      updateAverage(newCategories, catIdx);
                      return newCategories;
                    });
                  }}
                />
              </GradebookCard>
            </View>
          );
        }}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 48}
        vertical={false}
        onSnapToItem={(index) => {
          if (index !== animatedIndex) {
            setAnimatedIndex(-1);
          }
        }}
        onScrollIndexChanged={(index) => {
          setCurrentCard(index);
        }}
      />
    </View>
  );
}

const GradebookMemo = React.memo(Gradebook);
export default GradebookMemo;
