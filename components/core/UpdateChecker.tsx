import {useEffect} from "react";
import axios from "redaxios";
import * as Application from "expo-application";
import * as Device from "expo-device";
import Storage from "expo-storage";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

function parseVersion(version: string) {
    const arr = version
        .split(".")
        .map(i=>parseInt(i));

    return {str: version, arr: arr.concat(new Array(3 - arr.length).fill(0))}
}

async function getReleaseNotes(version: string) {
    return (await firestore().collection("releaseNotes").doc(version).get()).data()?.display.replaceAll("\\n", "\n");
}

export default function UpdateChecker() {
    useEffect(() => {
        if (Device.brand !== "Apple") return;

        axios("https://apps.apple.com/us/app/scorecard-gradebook-viewer/id6476124418").then(async (res) => {
            const versions = JSON.parse(Object.values(JSON.parse((res.data as string).match(/<script type="fastboot\/shoebox" id="shoebox-media-api-cache-apps">(.*?)<\/script>/)?.[1]!))[0] as string)
                .d[0].attributes.platformAttributes.ios.versionHistory;

            const latestVersion = parseVersion(versions[0].versionDisplay);
            const version = parseVersion(Application.nativeApplicationVersion!);
            const storedVersion = await Storage.getItem({key: "version"}) ?? Application.nativeApplicationVersion!;

            if (version.arr[0] < 1) {
                console.log("Development mode detected, no update checks");
                return;
            }

            if (version.arr.find((v, i) => v < latestVersion.arr[i]) !== undefined) {
                console.log("Update available, release notes:\n\n"+await getReleaseNotes(latestVersion.str));
            } else if (storedVersion != version.str) {
                console.log("Just updated, release notes:\n\n"+await getReleaseNotes(version.str));
            }

            await Storage.setItem({key: "version", value: version.str})
        })
    }, []);

    return undefined
}