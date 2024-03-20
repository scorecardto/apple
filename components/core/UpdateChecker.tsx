import {useEffect} from "react";
import axios from "redaxios";
import * as Application from "expo-application";
import * as Device from "expo-device";
import Storage from "expo-storage";

function parseVersion(version: string) {
    const arr = version
        .split(".")
        .map(i=>parseInt(i));

    return arr.concat(new Array(3 - arr.length).fill(0))
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

            if (version.find((v, i) => v < latestVersion[i]) !== undefined) {
                console.log("Update available, release notes:\n\n"+versions[0].releaseNotes);
            } else if (storedVersion != Application.nativeApplicationVersion!) {
                console.log("Just updated, release notes:\n\n"+versions[0].releaseNotes);
            }

            await Storage.setItem({key: "version", value: Application.nativeApplicationVersion!})
        })
    }, []);

    return undefined
}