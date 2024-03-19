import { View, Text } from "react-native";
import React from "react";
import Button from "../input/Button";
import Storage from "expo-storage";

import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { resetGradeData } from "../core/state/grades/gradeDataSlice";
import { resetOldCourseStates } from "../core/state/grades/oldCourseStatesSlice";
import { resetCourseSettings } from "../core/state/grades/courseSettingsSlice";
import { resetRefreshStatus } from "../core/state/grades/refreshStatusSlice";
import { resetInvitedNumbers } from "../core/state/user/invitedNumbersSlice";
import { resetLogin } from "../core/state/user/loginSlice";
import { resetName } from "../core/state/user/nameSlice";
import { resetSettings } from "../core/state/user/settingsSlice";
import { resetUserRank } from "../core/state/user/userRank";
import * as SecureStorage from "expo-secure-store";

import { reloadApp } from "../../lib/reloadApp";

export default function ErrorFallback() {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View>
          <Text
            style={{
              fontSize: 24,
              marginHorizontal: 64,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Something went wrong trying to load Scorecard.
          </Text>
        </View>
        <Button
          onPress={async () => {
            for (const key of [
              "name",
              "vipProgramDate",
              "enableGradebookNotifications",
              "gradebookCheckInterval",
              "notifs",
              "invitedNumbers",
              "openInviteSheetDate",
              "records",
              "courseSettings",
              "appSettings",
              "oldCourseStates",
              "oldGradebooks",
            ]) {
              await Storage.removeItem({ key });
            }
            SecureStorage.deleteItemAsync("login");

            firebase.auth().signOut();

            dispatch(resetGradeData());
            dispatch(resetOldCourseStates());
            dispatch(resetCourseSettings());
            dispatch(resetRefreshStatus());
            dispatch(resetInvitedNumbers());
            dispatch(resetLogin());
            dispatch(resetName());
            dispatch(resetSettings());
            dispatch(resetUserRank());

            reloadApp();
          }}
        >
          Reset Stored Grades
        </Button>
        <View style={{ height: 8 }} />
        <Button
          onPress={async () => {
            for (const key of ["records", "oldCourseStates", "oldGradebooks"]) {
              await Storage.removeItem({ key });
            }

            dispatch(resetGradeData());
            dispatch(resetOldCourseStates());

            reloadApp();
          }}
          secondary
        >
          Reset All Data
        </Button>
        <View style={{ height: 8 }} />
        <Button
          onPress={() => {
            reloadApp();
          }}
          secondary
        >
          Try Again
        </Button>
      </View>
    </View>
  );
}
