import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import App from "./App";
import Storage from "expo-storage";
import { setReloadApp } from "./lib/reloadApp";
import { store } from "./components/core/state/store";
import { Provider } from "react-redux";
import * as Clipboard from "expo-clipboard";
import ErrorFallback from "./components/util/ErrorFallback";
import ErrorBoundary from "./components/util/ErrorBoundary";

export default function Root() {
  const [key, setKey] = useState(0);
  setReloadApp(() => setKey(key + 1));

  const c = useCallback(async () => {
    await Storage.setItem({
      key: "records",
      value: `[
        {
          "courses": [
            {
              "key": "sectionIndex=1,courseIndex=3117.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "MULTIVAR CALC",
              "grades": [
                null,
                null,
                null,
                null,
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3117.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=4th 9 Weeks,courseIndex=3117.H000.X,calendarIndex=1,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=1,courseIndex=3115.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "LINEAR ALGEBRA",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=99,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                null,
                null,
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=1,courseIndex=3620.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 02,teacherIndex=Chin^ Robert,",
              "name": "AP CHEMISTRY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=96,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "96",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=4th 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=6,courseIndex=1603.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 03,teacherIndex=Sharp^ Bradley,",
              "name": "AP ENGLNG&CMP 3",
              "grades": [
                {
                  "key": "sectionIndex=6,gradeTypeIndex=1st 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=2nd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Exam,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=86,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "86",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Average,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=3rd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018,gradeIndex=95",
                  "value": "95",
                  "active": true
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=4th 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Daily Grade, Homework",
                  "id": "DailyGradeHomework",
                  "average": "",
                  "weight": 15,
                  "assignments": [
                    {
                      "name": "March APMC",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-04-2024",
                      "due": "03-18-2024",
                      "scale": 36,
                      "max": 36,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=6002.R000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 04,teacherIndex=Edwards^ Paige,",
              "name": "LIFTME FIT WELL",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=4th 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Projects and Tests",
                  "id": "ProjectsandTests",
                  "average": "",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "Group Class Creation",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-26-2024",
                      "due": "03-18-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=2,courseIndex=3633.P100.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 05,teacherIndex=Davis^ Sarah,",
              "name": "AP PHYSICS 1",
              "grades": [
                {
                  "key": "sectionIndex=2,gradeTypeIndex=1st 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=2nd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Exam,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=96,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "96",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Average,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=3rd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018,gradeIndex=97",
                  "value": "97",
                  "active": true
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=4th 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "11.01 Coursework",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-07-2024",
                      "due": "03-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes/Enrichment",
                  "id": "QuizzesEnrichment",
                  "average": "",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "11.01 Entry Work",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-07-2024",
                      "due": "03-18-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=4617.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 06,teacherIndex=Aguayo^ Maricruz,",
              "name": "AP EURO HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=92,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "92",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=4th 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=3,courseIndex=7020.HA00.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 07,teacherIndex=Shockey^ James,",
              "name": "COMPUTER SCI 2",
              "grades": [
                {
                  "key": "sectionIndex=3,gradeTypeIndex=1st 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=95,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "95",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=2nd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Exam,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Average,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=3rd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018,gradeIndex=97",
                  "value": "97",
                  "active": true
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=4th 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=11,courseIndex=4602.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 08,teacherIndex=Goodell^ H John,",
              "name": "AP US HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=11,gradeTypeIndex=1st 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=2nd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Exam,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Average,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=3rd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=4th 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018,gradeIndex=NG",
                  "value": "NG",
                  "active": true
                },
                null,
                null
              ],
              "gradeCategories": []
            }
          ],
          "gradeCategory": 5,
          "date": 1710773849441,
          "gradeCategoryNames": [
            "1st 9 Weeks",
            "2nd 9 Weeks",
            "Sem 1 Exam",
            "Sem 1 Average",
            "3rd 9 Weeks",
            "4th 9 Weeks",
            "Sem 2 Exam",
            "Sem 2 Average"
          ]
        },
        {
          "courses": [
            {
              "key": "sectionIndex=1,courseIndex=3117.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "MULTIVAR CALC",
              "grades": [
                null,
                null,
                null,
                null,
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3117.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Homework",
                  "id": "Homework",
                  "average": "100",
                  "weight": 10,
                  "assignments": [
                    {
                      "name": "Assignment 1.1: Introduction to Paths and Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-10-2024",
                      "due": "01-17-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.2: Calculus of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-17-2024",
                      "due": "01-19-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.3: Speed and Arclength of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-19-2024",
                      "due": "01-22-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.4: Curvature of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-24-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.5: Space Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-24-2024",
                      "due": "01-29-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.6: The Frenet Frame",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-29-2024",
                      "due": "01-31-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 2.1: Planes in Space",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-31-2024",
                      "due": "02-05-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 2.2: Graphs",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "02-05-2024",
                      "due": "02-12-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 2.3: Partial Derivatives",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-14-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 2.4: Extrema",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "02-14-2024",
                      "due": "02-26-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes",
                  "id": "Quizzes",
                  "average": "105",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "Quiz 1: Lessons 1.1 through 1.3",
                      "grade": "110%",
                      "points": 110,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-22-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz 2: Lessons 1.4 through 1.6",
                      "grade": "110%",
                      "points": 110,
                      "dropped": false,
                      "assign": "01-31-2024",
                      "due": "01-31-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz 3: Lessons 2.1-2.2",
                      "grade": "99%",
                      "points": 99,
                      "dropped": false,
                      "assign": "02-14-2024",
                      "due": "02-14-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz 4: Lesson 2.3-2.4",
                      "grade": "99%",
                      "points": 99,
                      "dropped": false,
                      "assign": "02-26-2024",
                      "due": "02-26-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Tests",
                  "id": "Tests",
                  "average": "105",
                  "weight": 55,
                  "assignments": [
                    {
                      "name": "Exam 1: Paths and Curves",
                      "grade": "110%",
                      "points": 110,
                      "dropped": false,
                      "assign": "02-07-2024",
                      "due": "02-07-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Exam 2: Functions from R2 to R",
                      "grade": "99%",
                      "points": 99,
                      "dropped": false,
                      "assign": "02-28-2024",
                      "due": "02-28-2024",
                      "scale": 100,
                      "max": 110,
                      "count": 100,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Peer Tutoring Hours",
                  "id": "PeerTutoringHours",
                  "average": "",
                  "weight": 0,
                  "assignments": [
                    {
                      "name": "Peer Tutoring Hours Q3 (this will not yet show up in your avg)",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-08-2024",
                      "due": "03-08-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=3115.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "LINEAR ALGEBRA",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=99,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                null,
                null,
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=1,courseIndex=3620.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 02,teacherIndex=Chin^ Robert,",
              "name": "AP CHEMISTRY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018,gradeIndex=96",
                  "value": "96",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Practice/Labs/Choice Boards",
                  "id": "PracticeLabsChoiceBoards",
                  "average": "97",
                  "weight": 65,
                  "assignments": [
                    {
                      "name": "7.1-7.6 MyAP",
                      "grade": "100%",
                      "points": 20,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 20,
                      "max": 20,
                      "count": 20,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "7.7-7.14 MyAP",
                      "grade": "100%",
                      "points": 30,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-24-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 30,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Practice Participation",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-16-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Unit 7 Challenge Problem",
                      "grade": "100%",
                      "points": 40,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 40,
                      "max": 40,
                      "count": 40,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.2",
                      "grade": "92%",
                      "points": 46,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.1 + Bonus Showcase",
                      "grade": "96%",
                      "points": 48,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 60,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Practice & Participation",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-21-2024",
                      "due": "02-21-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Weekly Practice Participation",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "02-26-2024",
                      "due": "03-04-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Unit/Mock Exams",
                  "id": "UnitMockExams",
                  "average": "93",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "Exam 5 Unit 7 MCQ",
                      "grade": "93.1%",
                      "points": 55.9,
                      "dropped": false,
                      "assign": "01-31-2024",
                      "due": "01-31-2024",
                      "scale": 60,
                      "max": 60,
                      "count": 60,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Exam 5 Unit 7 FRQ",
                      "grade": "92.5%",
                      "points": 50.9,
                      "dropped": false,
                      "assign": "02-07-2024",
                      "due": "02-07-2024",
                      "scale": 55,
                      "max": 65,
                      "count": 55,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=6,courseIndex=1603.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 03,teacherIndex=Sharp^ Bradley,",
              "name": "AP ENGLNG&CMP 3",
              "grades": [
                {
                  "key": "sectionIndex=6,gradeTypeIndex=1st 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=2nd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Exam,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=86,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "86",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Average,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=3rd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018,gradeIndex=95",
                  "value": "95",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Daily Grade, Homework",
                  "id": "DailyGradeHomework",
                  "average": "100",
                  "weight": 15,
                  "assignments": [
                    {
                      "name": "100 page check-in",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Nonfiction Reading Notes",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Peer Editing: Nonfiction essay",
                      "grade": "EXC",
                      "points": null,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-12-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "March APMC",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-04-2024",
                      "due": "03-08-2024",
                      "scale": 36,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quiz, Unit Test",
                  "id": "QuizUnitTest",
                  "average": "99",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "NLFD ch 1-5 quiz",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-24-2024",
                      "due": "01-24-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Columbian Orator",
                      "grade": "95%",
                      "points": 95,
                      "dropped": false,
                      "assign": "02-02-2024",
                      "due": "02-02-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "NLFD Reading Guide",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-17-2024",
                      "due": "02-02-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 2,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Major Grade: Project, Lab, Essay, etc",
                  "id": "MajorGradeProjectLabEssayetc",
                  "average": "91",
                  "weight": 50,
                  "assignments": [
                    {
                      "name": "Nonfiction Rhetorical Analysis",
                      "grade": "92%",
                      "points": 92,
                      "dropped": false,
                      "assign": "02-07-2024",
                      "due": "02-07-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Creative Nonfiction Essays",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-21-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "FRQ 1",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "02-28-2024",
                      "due": "02-28-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=6002.R000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 04,teacherIndex=Edwards^ Paige,",
              "name": "LIFTME FIT WELL",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Reflections and Quizzes",
                  "id": "ReflectionsandQuizzes",
                  "average": "100",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "Health Topic 15: Time Management",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-12-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 16: Cultural Proficiency",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-19-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 17: Skeletal System",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 18: Muscular System",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-02-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 19: Carbohydrates Fats Proteins",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-12-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 20: Vitamins Minerals",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 21: Stress and Stress Management",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-23-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Projects and Tests",
                  "id": "ProjectsandTests",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "ABC's of LFW + Yoga",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Group Class Creation",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-26-2024",
                      "due": "03-08-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Weekly Grades",
                  "id": "WeeklyGrades",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "In Class Effort",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Circuit Creations",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-26-2024",
                      "due": "03-01-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=2,courseIndex=3633.P100.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 05,teacherIndex=Davis^ Sarah,",
              "name": "AP PHYSICS 1",
              "grades": [
                {
                  "key": "sectionIndex=2,gradeTypeIndex=1st 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=2nd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Exam,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=96,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "96",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Average,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=3rd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018,gradeIndex=97",
                  "value": "97",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "99",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Coursework A",
                      "grade": "90%",
                      "points": 4.5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.01 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-30-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "02-01-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.02 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-30-2024",
                      "due": "02-06-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.02 Coursework B",
                      "grade": "90%",
                      "points": 4.5,
                      "dropped": false,
                      "assign": "01-30-2024",
                      "due": "02-06-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.04 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-06-2024",
                      "due": "02-08-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.05 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.05 Group Practice FRQ",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.01 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.02 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-22-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.03 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-22-2024",
                      "due": "02-27-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.03 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-22-2024",
                      "due": "02-27-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.04 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-23-2024",
                      "due": "02-27-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.05 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-27-2024",
                      "due": "02-27-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.05 Group Practice",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-27-2024",
                      "due": "02-27-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes/Enrichment",
                  "id": "QuizzesEnrichment",
                  "average": "99",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-16-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Entry Work",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-18-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.02 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-30-2024",
                      "due": "01-30-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.03 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-01-2024",
                      "due": "02-01-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.04 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-06-2024",
                      "due": "02-06-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.05 Entry Work",
                      "grade": "95%",
                      "points": 95,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.01 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-15-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.02 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.03 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-22-2024",
                      "due": "02-22-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.04 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-23-2024",
                      "due": "02-23-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10.05 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-27-2024",
                      "due": "02-27-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "95",
                  "weight": 60,
                  "assignments": [
                    {
                      "name": "08 Exam FRQ",
                      "grade": "98%",
                      "points": 98,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08 Exam MCQ",
                      "grade": "92%",
                      "points": 92,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09 Exam FRQ",
                      "grade": "89%",
                      "points": 89,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-13-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09 Exam MCQ",
                      "grade": "98%",
                      "points": 98,
                      "dropped": false,
                      "assign": "02-12-2024",
                      "due": "02-13-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10 Exam FRQ",
                      "grade": "94%",
                      "points": 94,
                      "dropped": false,
                      "assign": "02-29-2024",
                      "due": "02-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "10 Exam MCQ",
                      "grade": "98%",
                      "points": 98,
                      "dropped": false,
                      "assign": "02-29-2024",
                      "due": "02-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=4617.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 06,teacherIndex=Aguayo^ Maricruz,",
              "name": "AP EURO HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=92,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "92",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "99",
                  "weight": 30,
                  "assignments": [
                    {
                      "name": "5.1a Napoleon",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5a Prep Notes",
                      "grade": "96%",
                      "points": 48,
                      "dropped": false,
                      "assign": "02-06-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5b Discussion",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.6a Migration",
                      "grade": "100%",
                      "points": 30,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Case Studies",
                  "id": "CaseStudies",
                  "average": "100",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "5.3a IR Infographics",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-26-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "94",
                  "weight": 50,
                  "assignments": [
                    {
                      "name": "DBQ #5",
                      "grade": "95%",
                      "points": 95,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "SAQs #4",
                      "grade": "95%",
                      "points": 95,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "MCQs (to 1914)",
                      "grade": "93%",
                      "points": 93,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=3,courseIndex=7020.HA00.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 07,teacherIndex=Shockey^ James,",
              "name": "COMPUTER SCI 2",
              "grades": [
                {
                  "key": "sectionIndex=3,gradeTypeIndex=1st 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=95,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "95",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=2nd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Exam,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Average,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=3rd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018,gradeIndex=97",
                  "value": "97",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Labs/Quizzes/Tests",
                  "id": "LabsQuizzesTests",
                  "average": "97",
                  "weight": 100,
                  "assignments": [
                    {
                      "name": "Supplementary: Age Of AI",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "GP3 Classroom Administration",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: Towers of Hanoi by Induction proof",
                      "grade": "100%",
                      "points": 2,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 51.Stacks",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 52.Queues & Priority Queues",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab: LaQueue ? IPC",
                      "grade": "90%",
                      "points": 9,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-25-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 53.Binary Search Trees",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-30-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab: Binary Search Insert",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-30-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Supplemental: How Computers Calculate: the ALU",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "02-06-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: Huffman Trees",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-30-2024",
                      "due": "02-13-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 54.AVL Tree (Playposit)",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "02-05-2024",
                      "due": "02-13-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Worksheet: Huffman coding",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-30-2024",
                      "due": "02-13-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "GP3 Exam",
                      "grade": "93.7%",
                      "points": 37.5,
                      "dropped": false,
                      "assign": "02-21-2024",
                      "due": "02-23-2024",
                      "scale": 40,
                      "max": 40,
                      "count": 40,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment E",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-27-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment A",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-08-2024",
                      "due": "03-08-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment B",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-08-2024",
                      "due": "03-08-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment C",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-08-2024",
                      "due": "03-08-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment D",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "03-08-2024",
                      "due": "03-08-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=11,courseIndex=4602.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 08,teacherIndex=Goodell^ H John,",
              "name": "AP US HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=11,gradeTypeIndex=1st 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=2nd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Exam,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Average,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=3rd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Classwork/miscellaneous",
                  "id": "Classworkmiscellaneous",
                  "average": "100",
                  "weight": 25,
                  "assignments": [
                    {
                      "name": "Missing Voices Period 6",
                      "grade": "100%",
                      "points": 12,
                      "dropped": true,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz Period 6/7",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Missing Voices Period 7(1)",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "02-02-2024",
                      "due": "02-06-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "MCQ Quiz Period 7",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "02-16-2024",
                      "due": "02-20-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Missing Voices Period 7(2)",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "02-16-2024",
                      "due": "02-20-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "DBQ Modules",
                      "grade": "100%",
                      "points": 20,
                      "dropped": false,
                      "assign": "02-16-2024",
                      "due": "02-20-2024",
                      "scale": 20,
                      "max": 20,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Missing Voices 7(3)",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "03-01-2024",
                      "due": "03-05-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Writing",
                  "id": "Writing",
                  "average": "98",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "LEQ 1",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "DBQ 1",
                      "grade": "95%",
                      "points": 95,
                      "dropped": false,
                      "assign": "02-02-2024",
                      "due": "02-06-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "DBQ 2",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-13-2024",
                      "due": "02-13-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Short Answer Responses",
                      "grade": "90%",
                      "points": 90,
                      "dropped": true,
                      "assign": "02-28-2024",
                      "due": "02-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Exams",
                  "id": "Exams",
                  "average": "100",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "MCQ Exam",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "02-28-2024",
                      "due": "02-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            }
          ],
          "gradeCategory": 4,
          "date": 1710675208205,
          "gradeCategoryNames": [
            "1st 9 Weeks",
            "2nd 9 Weeks",
            "Sem 1 Exam",
            "Sem 1 Average",
            "3rd 9 Weeks",
            "4th 9 Weeks",
            "Sem 2 Exam",
            "Sem 2 Average"
          ]
        },
        {
          "courses": [
            {
              "key": "sectionIndex=1,courseIndex=3117.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "MULTIVAR CALC",
              "grades": [
                null,
                null,
                null,
                null,
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3117.H000.X,calendarIndex=1,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Homework",
                  "id": "Homework",
                  "average": "100",
                  "weight": 10,
                  "assignments": [
                    {
                      "name": "Assignment 1.1: Introduction to Paths and Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-10-2024",
                      "due": "01-17-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.2: Calculus of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-17-2024",
                      "due": "01-19-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.3: Speed and Arclength of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-19-2024",
                      "due": "01-22-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.4: Curvature of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-24-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.5: Space Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-24-2024",
                      "due": "01-29-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes",
                  "id": "Quizzes",
                  "average": "100",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "Quiz 1: Lessons 1.1 through 1.3",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-22-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 100,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=3115.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "LINEAR ALGEBRA",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=99,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                null,
                null,
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=1,courseIndex=3620.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 02,teacherIndex=Chin^ Robert,",
              "name": "AP CHEMISTRY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Practice/Labs/Choice Boards",
                  "id": "PracticeLabsChoiceBoards",
                  "average": "100",
                  "weight": 65,
                  "assignments": [
                    {
                      "name": "7.1-7.6 MyAP",
                      "grade": "100%",
                      "points": 20,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 20,
                      "max": 20,
                      "count": 20,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "7.7-7.14 MyAP",
                      "grade": "100%",
                      "points": 30,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-24-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 30,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.2",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Unit 7 Challenge Problem",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.1 + Bonus Showcase",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 60,
                      "count": 50,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=6,courseIndex=1603.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 03,teacherIndex=Sharp^ Bradley,",
              "name": "AP ENGLNG&CMP 3",
              "grades": [
                {
                  "key": "sectionIndex=6,gradeTypeIndex=1st 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=2nd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Exam,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=86,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "86",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Average,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=3rd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018,gradeIndex=99",
                  "value": "99",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Daily Grade, Homework",
                  "id": "DailyGradeHomework",
                  "average": "95",
                  "weight": 15,
                  "assignments": [
                    {
                      "name": "100 page check-in",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Nonfiction Reading Notes",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quiz, Unit Test",
                  "id": "QuizUnitTest",
                  "average": "100",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "NLFD ch 1-5 quiz",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-24-2024",
                      "due": "01-24-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=6002.R000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 04,teacherIndex=Edwards^ Paige,",
              "name": "LIFTME FIT WELL",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Reflections and Quizzes",
                  "id": "ReflectionsandQuizzes",
                  "average": "100",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "Health Topic 15: Time Management",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-12-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 16: Cultural Proficiency",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-19-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 17: Skeletal System",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Projects and Tests",
                  "id": "ProjectsandTests",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "ABC's of LFW + Yoga",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=2,courseIndex=3633.P100.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 05,teacherIndex=Davis^ Sarah,",
              "name": "AP PHYSICS 1",
              "grades": [
                {
                  "key": "sectionIndex=2,gradeTypeIndex=1st 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=2nd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Exam,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=96,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "96",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Average,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=3rd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018,gradeIndex=96",
                  "value": "96",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "99",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Coursework A",
                      "grade": "90%",
                      "points": 4.5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.01 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework A",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-30-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework B",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "02-01-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes/Enrichment",
                  "id": "QuizzesEnrichment",
                  "average": "98",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-16-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Entry Work",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-18-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Entry Work",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "95",
                  "weight": 60,
                  "assignments": [
                    {
                      "name": "08 Exam FRQ",
                      "grade": "98%",
                      "points": 98,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08 Exam MCQ",
                      "grade": "92%",
                      "points": 92,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=4617.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 06,teacherIndex=Aguayo^ Maricruz,",
              "name": "AP EURO HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=92,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "92",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "100",
                  "weight": 30,
                  "assignments": [
                    {
                      "name": "5.1a Napoleon",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5a Prep Notes",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-06-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5b Discussion",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.6a Migration",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Case Studies",
                  "id": "CaseStudies",
                  "average": "100",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "5.3a IR Infographics",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-26-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "",
                  "weight": 50,
                  "assignments": [
                    {
                      "name": "DBQ #5",
                      "grade": "pnd",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "SAQs #4",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "MCQs (to 1914)",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=3,courseIndex=7020.HA00.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 07,teacherIndex=Shockey^ James,",
              "name": "COMPUTER SCI 2",
              "grades": [
                {
                  "key": "sectionIndex=3,gradeTypeIndex=1st 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=95,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "95",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=2nd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Exam,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Average,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=3rd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Labs/Quizzes/Tests",
                  "id": "LabsQuizzesTests",
                  "average": "100",
                  "weight": 100,
                  "assignments": [
                    {
                      "name": "Supplementary: Age Of AI",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "GP3 Classroom Administration",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: Towers of Hanoi by Induction proof",
                      "grade": "100%",
                      "points": 2,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 51.Stacks",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 52.Queues & Priority Queues",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=11,courseIndex=4602.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 08,teacherIndex=Goodell^ H John,",
              "name": "AP US HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=11,gradeTypeIndex=1st 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=2nd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Exam,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Average,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=3rd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Classwork/miscellaneous",
                  "id": "Classworkmiscellaneous",
                  "average": "100",
                  "weight": 25,
                  "assignments": [
                    {
                      "name": "Missing Voices Period 6",
                      "grade": "100%",
                      "points": 12,
                      "dropped": true,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz Period 6/7",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Writing",
                  "id": "Writing",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "LEQ 1",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            }
          ],
          "gradeCategory": 4,
          "date": 1706645898956,
          "gradeCategoryNames": [
            "1st 9 Weeks",
            "2nd 9 Weeks",
            "Sem 1 Exam",
            "Sem 1 Average",
            "3rd 9 Weeks",
            "4th 9 Weeks",
            "Sem 2 Exam",
            "Sem 2 Average"
          ]
        },
        {
          "courses": [
            {
              "key": "sectionIndex=1,courseIndex=3117.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "MULTIVAR CALC",
              "grades": [
                null,
                null,
                null,
                null,
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3117.H000.X,calendarIndex=1,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Homework",
                  "id": "Homework",
                  "average": "100",
                  "weight": 10,
                  "assignments": [
                    {
                      "name": "Assignment 1.1: Introduction to Paths and Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-10-2024",
                      "due": "01-17-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.2: Calculus of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-17-2024",
                      "due": "01-19-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.3: Speed and Arclength of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-19-2024",
                      "due": "01-22-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Assignment 1.4: Curvature of Plane Curves",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-24-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes",
                  "id": "Quizzes",
                  "average": "100",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "Quiz 1: Lessons 1.1 through 1.3",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-22-2024",
                      "due": "01-22-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 100,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=3115.H000.X,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 01,teacherIndex=Harrelson^ Sarah,",
              "name": "LINEAR ALGEBRA",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=99,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3115.H000.X,calendarIndex=1,gradeIndex=100,teacherIndex=Harrelson^ Sarah,dayCodeIndex=A - 01,locIndex=018",
                  "value": "100",
                  "active": false
                },
                null,
                null,
                null,
                null
              ],
              "gradeCategories": []
            },
            {
              "key": "sectionIndex=1,courseIndex=3620.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 02,teacherIndex=Chin^ Robert,",
              "name": "AP CHEMISTRY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=3620.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=3620.P000.Y,calendarIndex=1,teacherIndex=Chin^ Robert,dayCodeIndex=A - 02,locIndex=018,gradeIndex=0",
                  "value": "0",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Practice/Labs/Choice Boards",
                  "id": "PracticeLabsChoiceBoards",
                  "average": "0",
                  "weight": 65,
                  "assignments": [
                    {
                      "name": "7.1-7.6 MyAP",
                      "grade": "0",
                      "points": 0,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 20,
                      "max": 20,
                      "count": 20,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "7.7-7.14 MyAP",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-24-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 30,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.2",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Unit 7 Challenge Problem",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 50,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Lab 7.1 + Bonus Showcase",
                      "grade": "PND",
                      "points": null,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "02-16-2024",
                      "scale": 50,
                      "max": 60,
                      "count": 50,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=6,courseIndex=1603.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 03,teacherIndex=Sharp^ Bradley,",
              "name": "AP ENGLNG&CMP 3",
              "grades": [
                {
                  "key": "sectionIndex=6,gradeTypeIndex=1st 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=93,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "93",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=2nd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Exam,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=86,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "86",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=Sem 1 Average,courseIndex=1603.P000.Y,calendarIndex=1,gradeIndex=90,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018",
                  "value": "90",
                  "active": false
                },
                {
                  "key": "sectionIndex=6,gradeTypeIndex=3rd 9 Weeks,courseIndex=1603.P000.Y,calendarIndex=1,teacherIndex=Sharp^ Bradley,dayCodeIndex=A - 03,locIndex=018,gradeIndex=95",
                  "value": "95",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Daily Grade, Homework",
                  "id": "DailyGradeHomework",
                  "average": "95",
                  "weight": 15,
                  "assignments": [
                    {
                      "name": "100 page check-in",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Nonfiction Reading Notes",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quiz, Unit Test",
                  "id": "QuizUnitTest",
                  "average": "",
                  "weight": 35,
                  "assignments": [
                    {
                      "name": "NLFD ch 1-5 quiz",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-24-2024",
                      "due": "01-24-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=6002.R000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=A - 04,teacherIndex=Edwards^ Paige,",
              "name": "LIFTME FIT WELL",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=6002.R000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=6002.R000.Y,calendarIndex=1,teacherIndex=Edwards^ Paige,dayCodeIndex=A - 04,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Reflections and Quizzes",
                  "id": "ReflectionsandQuizzes",
                  "average": "100",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "Health Topic 15: Time Management",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-12-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 16: Cultural Proficiency",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-19-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Health Topic 17: Skeletal System",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-29-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Projects and Tests",
                  "id": "ProjectsandTests",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "ABC's of LFW + Yoga",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-17-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=2,courseIndex=3633.P100.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 05,teacherIndex=Davis^ Sarah,",
              "name": "AP PHYSICS 1",
              "grades": [
                {
                  "key": "sectionIndex=2,gradeTypeIndex=1st 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=2nd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Exam,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=96,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "96",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=Sem 1 Average,courseIndex=3633.P100.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=2,gradeTypeIndex=3rd 9 Weeks,courseIndex=3633.P100.Y,calendarIndex=1,teacherIndex=Davis^ Sarah,dayCodeIndex=B - 05,locIndex=018,gradeIndex=96",
                  "value": "96",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "99",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Coursework A",
                      "grade": "90%",
                      "points": 4.5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.01 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework A",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Coursework B",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Coursework",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework A",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-30-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Coursework B",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "02-01-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Quizzes/Enrichment",
                  "id": "QuizzesEnrichment",
                  "average": "98",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "08.01 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-09-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.02 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.03 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-16-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.04 Entry Work",
                      "grade": "90%",
                      "points": 90,
                      "dropped": false,
                      "assign": "01-18-2024",
                      "due": "01-18-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08.05 Entry Work",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-23-2024",
                      "due": "01-23-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "09.01 Entry Work",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "95",
                  "weight": 60,
                  "assignments": [
                    {
                      "name": "08 Exam FRQ",
                      "grade": "98%",
                      "points": 98,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "08 Exam MCQ",
                      "grade": "92%",
                      "points": 92,
                      "dropped": false,
                      "assign": "01-25-2024",
                      "due": "01-25-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=1,courseIndex=4617.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 06,teacherIndex=Aguayo^ Maricruz,",
              "name": "AP EURO HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=1,gradeTypeIndex=1st 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=2nd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Exam,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=92,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "92",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=Sem 1 Average,courseIndex=4617.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=1,gradeTypeIndex=3rd 9 Weeks,courseIndex=4617.P000.Y,calendarIndex=1,teacherIndex=Aguayo^ Maricruz,dayCodeIndex=B - 06,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Coursework",
                  "id": "Coursework",
                  "average": "100",
                  "weight": 30,
                  "assignments": [
                    {
                      "name": "5.1a Napoleon",
                      "grade": "100%",
                      "points": 50,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-16-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5a Prep Notes",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-06-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.5b Discussion",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-15-2024",
                      "due": "02-15-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "5.6a Migration",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 30,
                      "max": 30,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Case Studies",
                  "id": "CaseStudies",
                  "average": "",
                  "weight": 20,
                  "assignments": [
                    {
                      "name": "5.3a IR Infographics",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-16-2024",
                      "due": "01-26-2024",
                      "scale": 50,
                      "max": 50,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Mastery Assessment",
                  "id": "MasteryAssessment",
                  "average": "",
                  "weight": 50,
                  "assignments": [
                    {
                      "name": "DBQ #5",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "SAQs #4",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-08-2024",
                      "due": "02-08-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "MCQs (to 1914)",
                      "grade": "",
                      "points": null,
                      "dropped": false,
                      "assign": "02-20-2024",
                      "due": "02-20-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=3,courseIndex=7020.HA00.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 07,teacherIndex=Shockey^ James,",
              "name": "COMPUTER SCI 2",
              "grades": [
                {
                  "key": "sectionIndex=3,gradeTypeIndex=1st 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=95,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "95",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=2nd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Exam,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=Sem 1 Average,courseIndex=7020.HA00.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=3,gradeTypeIndex=3rd 9 Weeks,courseIndex=7020.HA00.Y,calendarIndex=1,teacherIndex=Shockey^ James,dayCodeIndex=B - 07,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Labs/Quizzes/Tests",
                  "id": "LabsQuizzesTests",
                  "average": "100",
                  "weight": 100,
                  "assignments": [
                    {
                      "name": "Supplementary: Age Of AI",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "GP3 Classroom Administration",
                      "grade": "100%",
                      "points": 10,
                      "dropped": false,
                      "assign": "01-08-2024",
                      "due": "01-11-2024",
                      "scale": 10,
                      "max": 10,
                      "count": 10,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: Towers of Hanoi by Induction proof",
                      "grade": "100%",
                      "points": 2,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 2,
                      "max": 2,
                      "count": 2,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 51.Stacks",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-09-2024",
                      "due": "01-16-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Topic: 52.Queues & Priority Queues",
                      "grade": "100%",
                      "points": 5,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-18-2024",
                      "scale": 5,
                      "max": 5,
                      "count": 5,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            },
            {
              "key": "sectionIndex=11,courseIndex=4602.P000.Y,skGrpIndex=null,calendarIndex=1,dayCodeIndex=B - 08,teacherIndex=Goodell^ H John,",
              "name": "AP US HISTORY",
              "grades": [
                {
                  "key": "sectionIndex=11,gradeTypeIndex=1st 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=97,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "97",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=2nd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=99,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "99",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Exam,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=100,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "100",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=Sem 1 Average,courseIndex=4602.P000.Y,calendarIndex=1,gradeIndex=98,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018",
                  "value": "98",
                  "active": false
                },
                {
                  "key": "sectionIndex=11,gradeTypeIndex=3rd 9 Weeks,courseIndex=4602.P000.Y,calendarIndex=1,teacherIndex=Goodell^ H John,dayCodeIndex=B - 08,locIndex=018,gradeIndex=100",
                  "value": "100",
                  "active": true
                },
                null,
                null,
                null
              ],
              "gradeCategories": [
                {
                  "name": "Classwork/miscellaneous",
                  "id": "Classworkmiscellaneous",
                  "average": "100",
                  "weight": 25,
                  "assignments": [
                    {
                      "name": "Missing Voices Period 6",
                      "grade": "100%",
                      "points": 12,
                      "dropped": true,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    },
                    {
                      "name": "Quiz Period 6/7",
                      "grade": "100%",
                      "points": 12,
                      "dropped": false,
                      "assign": "01-26-2024",
                      "due": "01-26-2024",
                      "scale": 12,
                      "max": 12,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                },
                {
                  "name": "Writing",
                  "id": "Writing",
                  "average": "100",
                  "weight": 40,
                  "assignments": [
                    {
                      "name": "LEQ 1",
                      "grade": "100%",
                      "points": 100,
                      "dropped": false,
                      "assign": "01-11-2024",
                      "due": "01-11-2024",
                      "scale": 100,
                      "max": 100,
                      "count": 1,
                      "note": " ",
                      "error": false
                    }
                  ],
                  "error": false
                }
              ]
            }
          ],
          "gradeCategory": 4,
          "date": 1706573180171,
          "gradeCategoryNames": [
            "1st 9 Weeks",
            "2nd 9 Weeks",
            "Sem 1 Exam",
            "Sem 1 Average",
            "3rd 9 Weeks",
            "4th 9 Weeks",
            "Sem 2 Exam",
            "Sem 2 Average"
          ]
        }
      ]`,
    });

    Storage.getItem({ key: "records" }).then((r) => {
      console.log(r);
    });
  }, []);

  useEffect(() => {
    c();
  }, []);
  return (
    <Provider store={store} key={`${key}`}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <App key={`${key}`} resetKey={`${key}`} />
      </ErrorBoundary>
    </Provider>
  );
}
