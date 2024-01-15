import React, { Dispatch, SetStateAction } from "react";
import { GradebookNotification, GradebookRecord } from "scorecard-types";
import UserRank from "../../../lib/types/UserRank";

export const MobileDataContext = React.createContext<MobileDataProvider>({
  district: "",
  setDistrict: () => {},
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
  sessionId: "",
  setSessionId: () => {},
  referer: "",
  setReferer: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  confirmPhoneNumberCallback: async () => {},
  setConfirmPhoneNumberCallback: () => {},
  notifications: [],
  setNotifications: () => {},
  enableGradebookNotifications: false,
  setEnableGradebookNotifications: () => {},
  gradebookCheckInterval: "morning",
  setGradebookCheckInterval: () => {},
  userRank: "DEFAULT",
  setUserRank: () => {},
});

export interface MobileDataProvider {
  district: string;
  setDistrict: (district: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  sessionId: string;
  setSessionId: (sessionId: string) => void;
  referer: string;
  setReferer: (referer: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  confirmPhoneNumberCallback: (code: string) => Promise<any>;
  setConfirmPhoneNumberCallback: React.SetStateAction<any>;
  notifications: GradebookNotification[];
  setNotifications: Dispatch<SetStateAction<GradebookNotification[]>>;
  enableGradebookNotifications: boolean;
  setEnableGradebookNotifications: Dispatch<SetStateAction<boolean>>;
  gradebookCheckInterval: string;
  setGradebookCheckInterval: Dispatch<SetStateAction<string>>;
  userRank: UserRank;
  setUserRank: Dispatch<SetStateAction<UserRank>>;
}
