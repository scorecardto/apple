import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import CourseCornerButton from "../../app/course/CourseCornerButton";
import CourseCornerButtonContainer from "../../app/course/CourseCornerButtonContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import LargeText from "../../text/LargeText";
import useColors from "../../core/theme/useColors";
import Button from "../../input/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../core/state/store";
import ManageClubPreview from "../../app/clubs/ManageClubPreview";
import ClubAdminToolbar from "../../app/clubs/ClubAdminToolbar";
import ClubCustomizeView from "../../app/clubs/ClubCustomizeView";
import CourseSaveArrayContainer from "../../app/course/CourseSaveArrayContainer";
import { Club } from "scorecard-types";
import useScApi from "../../util/hooks/useScApi";
import { TextInput } from "../../input/TextInput";
import ClubHomeView from "../../app/clubs/ClubHomeView";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import useSocial from "../../util/hooks/useSocial";

export default function ClubAdminScreen(props: {
  navigation: NavigationProp<any, any>;
  route: any;
}) {
  const { clubCode } = props.route.params;

  const colors = useColors();
  const navigation = useNavigation();

  const [tab, setTab] = useState("home");

  const [club, setClub] = useState<Club | null>(null);
  const [activeClub, setActiveClub] = useState<Club | null>(null);

  const [loading, setLoading] = useState(false);
  const [forceLoading, setForceLoading] = useState(false);

  const api = useScApi();

  const fetchClub = useCallback(async () => {
    await api
      .get({
        pathname: "/v1/clubs/get",
        params: {
          clubCode,
        },
        auth: true,
      })
      .then((result) => {
        setClub(result.data.club);
      });
  }, [clubCode]);

  const social = useSocial();
  const updateClub = useCallback((c: Club) => {
    api
      .post({
        pathname: "/v1/clubs/update",
        body: {
          club: c,
        },
        auth: true,
      })
      .then((result) => {
        social.refreshClubs();
        fetchClub().then(() => {
          setLoading(false);
          setForceLoading(false);
        });
      });
  }, []);

  useEffect(() => {
    fetchClub();
  }, []);

  useEffect(() => {
    if (
      !loading &&
      activeClub &&
      JSON.stringify(activeClub) !== JSON.stringify(club)
    ) {
      const t = setTimeout(() => {
        setLoading(true);
        updateClub(activeClub);
      }, 1500);

      return () => {
        clearTimeout(t);
      };
    }
  }, [club, activeClub]);

  useEffect(() => {
    console.log(club);
  }, [club]);

  const clubCustomizeView = useMemo(() => {
    if (club) {
      return (
        <ClubCustomizeView
          club={club}
          startLoading={() => setForceLoading(true)}
          updateClub={(c) => {
            setActiveClub(c);
          }}
        />
      );
    }
  }, [tab]);
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <View
        style={{
          flexShrink: 0,
        }}
      >
        <CourseSaveArrayContainer
          onPressLeft={() => {
            props.navigation.goBack();
          }}
          save={tab === "edit"}
          hideRight
          canSave={JSON.stringify(activeClub) !== JSON.stringify(club)}
          saving={forceLoading || loading}
          onPressRight={() => {}}
        />
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <ClubAdminToolbar tab={tab} setTab={setTab} club={club} />
        </View>
      </View>
      <View
        style={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingVertical: 4,
          flex: 1,
        }}
      >
        {club && (
          <KeyboardAwareScrollView
            style={{
              height: "100%",
              flex: 1,
            }}
          >
            {tab === "home" && <ClubHomeView club={club} />}
            {tab === "edit" && clubCustomizeView}
          </KeyboardAwareScrollView>
        )}
      </View>
    </View>
  );
}