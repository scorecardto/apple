import { NavigationProp } from "@react-navigation/native";

import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity, Animated,
} from "react-native";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import PageThemeProvider from "../core/context/PageThemeProvider";
import Background from "../util/Background";
import HeaderBanner from "../text/HeaderBanner";
import useFooterHeight from "../util/hooks/useFooterHeight";
import Header from "../text/Header";
import InviteOthersCard from "../app/dashboard/InviteOthersCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../core/state/store";
import { FlatList } from "react-native-gesture-handler";
import CourseCard from "../app/dashboard/CourseCard";
import { store } from "../core/state/store";
import { fetchAllContent } from "../../lib/fetcher";
import RefreshStatus from "../../lib/types/RefreshStatus";
import { setRefreshStatus } from "../core/state/grades/refreshStatusSlice";
import fetchAndStore from "../../lib/fetchAndStore";
import GradeCategorySelectorSheet from "../app/dashboard/GradeCategorySelectorSheet";
import { ActionSheetRef } from "react-native-actions-sheet";
import { Course } from "scorecard-types";
import { getAnalytics } from "@react-native-firebase/analytics";
import DraggableComponent from "../util/DraggableComponent";
import {setCourseOrder} from "../core/state/grades/courseOrderSlice";
import {updateCourseOrder} from "../core/state/widget/widgetSlice";
export default function CurrentGradesScreen(props: {
  navigation: NavigationProp<any>;
}) {
  const dispatch = useDispatch();
  const footerHeight = useFooterHeight();

  const courses = useSelector(
    (s: RootState) =>
      s.gradeData.record?.courses?.filter?.(
        (c) => !s.courseSettings?.[c.key]?.hidden
      ) || [],
    (p: Course[], n: Course[]) => JSON.stringify(p) === JSON.stringify(n)
  );

  const gradeCategoryNames = useSelector(
    (s: RootState) => s.gradeData.record?.gradeCategoryNames || []
  );

  const currentGradeCategory = useSelector(
    (state: RootState) => state.gradeCategory.category || 0
  );

  const recordGradeCategory = useSelector(
    (state: RootState) => state.gradeData.record?.gradeCategory
  );

  const courseSettings = useSelector(
      (state: RootState) => state.courseSettings
  );

  const lastUpdated = useSelector(
    (state: RootState) => state.gradeData.record?.date ?? 0
  );

  const [time, setTime] = useState(Date.now());

  const [showLastUpdated, setShowLastUpdated] = useState(false);

  const headerText = useMemo(() => {
    if (showLastUpdated) {
      if (time - lastUpdated < 1000 * 60 * 10) {
        return "Up To Date";
      } else {
        return "Pull To Refresh";
      }
    }
    if (recordGradeCategory === currentGradeCategory) return "Your Scorecard";
    else return gradeCategoryNames[currentGradeCategory] ?? "No Data";
  }, [currentGradeCategory, recordGradeCategory, showLastUpdated]);

  const subheaderText = useMemo(() => {
    if (showLastUpdated) {
      if (time - lastUpdated < 1000 * 60 * 60) {
        const mins = Math.floor((time - lastUpdated) / 1000 / 60);

        if (mins <= 0) return `Your grades are fresh out of the oven`;
        return `Updated ${mins} minute${mins === 1 ? "" : "s"} ago`;
      }

      if (time - lastUpdated < 1000 * 60 * 60 * 24) {
        return `Updated ${Math.floor(
          (time - lastUpdated) / 1000 / 60 / 60
        )} hours ago`;
      }

      if (time - lastUpdated < 1000 * 60 * 60 * 24 * 2) {
        return "Updated yesterday";
      }

      if (time - lastUpdated < 1000 * 60 * 60 * 24 * 7) {
        return `Updated ${Math.floor(
          (time - lastUpdated) / 1000 / 60 / 60 / 24
        )} days ago`;
      }

      return `Updated on ${new Date(lastUpdated).toLocaleDateString()}`;
    }
    if (recordGradeCategory !== currentGradeCategory)
      return "Tap to change grading period";
    else return gradeCategoryNames[currentGradeCategory] ?? "No Data";
  }, [currentGradeCategory, recordGradeCategory, showLastUpdated]);

  const [showRefreshIndicator, setShowRefreshIndicator] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    setShowRefreshIndicator(true);

    setTimeout(() => {
      setShowRefreshIndicator(false);
    }, 1000);

    const s: RootState = store.getState();

    const reportCard = fetchAllContent(
      s.login.district,
      courses.length,
      s.login.username,
      s.login.password,
      undefined,
      (s: RefreshStatus) => {
        dispatch(setRefreshStatus(s));
      }
    );

    reportCard.then(async (data) => {
      await fetchAndStore(data, dispatch, false);
      setRefreshing(false);
      setShowRefreshIndicator(false);
    });
  }, []);

  const categorySelector = useRef<ActionSheetRef>(null);

  const [courseOrder, setNewCourseOrder] = useState(
      useSelector(
          (s: RootState) => s.courseOrder.order,
          () => true
      )
  );

  const courseCardOffsets = useRef(
      courseOrder.map((_) => new Animated.Value(0))
  );
  const courseCardOffsetValues = useRef(courseOrder.map((_) => 0));
  const courseCardPositions = useRef(courseOrder.map((_, i) => i));
  const orderRef = useRef(courseOrder);

  useEffect(() => {
    courseCardOffsets.current.forEach((v) => v.setValue(0));
    courseCardOffsetValues.current.fill(0);
    courseCardPositions.current = courseCardPositions.current.map((_, i) => i);
    orderRef.current = courseOrder;
  }, [courseOrder]);

  return (
    <PageThemeProvider
      theme={{
        default: {
          background: "#F4FAFF",
        },
      }}
    >
      <Background>
        <ScrollView
          refreshControl={
            <RefreshControl
              enabled={!refreshing}
              refreshing={refreshing}
              onRefresh={refresh}
            />
          }
          style={{ height: "100%" }}
          onScroll={(e) => {
            const progress = e.nativeEvent.contentOffset.y;

            setTime(Date.now());
            setShowLastUpdated(progress < -80);
          }}
          scrollEventThrottle={16}
        >
          <View
            style={{
              paddingBottom: footerHeight + 32,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                categorySelector.current?.show();
                getAnalytics().logEvent("show_grading_period_selector");
              }}
            >
              <Header header={headerText} subheader={subheaderText} />
            </TouchableOpacity>

            {/*<InviteOthersCard show={true} />*/}

            {courses && (
              <FlatList
                // style={{
                //   paddingBottom: 66,
                // }}
                scrollEnabled={false}
                data={[...courses].sort((a: Course, b: Course) => {
                  return (
                      courseOrder.indexOf(a.key) - courseOrder.indexOf(b.key)
                  );
                })}
                renderItem={({ item, index }) => {
                  const hidden = courseSettings[item.key]?.hidden;
                  if (hidden) return null;

                  return (
                      <DraggableComponent
                          posListener={(layout) => {
                            const truePos =
                                layout.y - courseCardOffsetValues.current[index];

                            if (Math.abs(truePos) > layout.height) {
                              const dir = Math.sign(truePos);

                              let targetIdx: number;
                              let offset = 0;
                              do {
                                offset += dir;
                                targetIdx = courseCardPositions.current.findIndex(
                                    (i) =>
                                        i == courseCardPositions.current[index] + offset
                                );

                                if (targetIdx < 0 || targetIdx >= courses.length)
                                  return;
                              } while (
                                  courseSettings[courses[targetIdx].key]?.hidden
                                  );

                              courseCardPositions.current[index] += offset;
                              courseCardPositions.current[targetIdx] -= offset;

                              courseCardOffsetValues.current[index] +=
                                  layout.height * dir;
                              courseCardOffsets.current[targetIdx].setValue(
                                  (courseCardOffsetValues.current[targetIdx] -=
                                      layout.height * dir)
                              );
                            }
                          }}
                          stopDragging={(layout) => {
                            const newOrder = courseCardPositions.current
                                .map((i, idx) => {
                                  return { idx: i, key: orderRef.current[idx] };
                                })
                                .sort((a, b) => a.idx - b.idx)
                                .map((c) => c.key);

                            setNewCourseOrder(newOrder);
                            dispatch(setCourseOrder(newOrder));
                            dispatch(updateCourseOrder(newOrder));

                            return {
                              x: 0,
                              y:
                                  Math.round(layout.y / layout.height) *
                                  layout.height,
                            };
                          }}
                          offsetY={courseCardOffsets.current[index]}
                          disableX={true}
                      >
                        <CourseCard
                            onClick={() =>
                                props.navigation.navigate("course", {
                                  key: item.key,
                                })
                            }
                            onHold={() => {}}
                            course={item}
                            gradingPeriod={currentGradeCategory || 0}
                        />
                      </DraggableComponent>
                  );
                }}
                keyExtractor={(item) => item.key}
              />
            )}

            <GradeCategorySelectorSheet ref={categorySelector} />
          </View>
        </ScrollView>
      </Background>
    </PageThemeProvider>
  );
}
