import Storage from "expo-storage";
import * as Crypto from "expo-crypto";
import * as Device from "expo-device";
import {DeviceType} from "expo-device";
import * as Application from "expo-application";

export async function getDeviceId() {
    const deviceId = await Storage.getItem({ key: "deviceId" });

    if (!deviceId) {
        const id = Crypto.randomUUID();
        await Storage.setItem({ key: "deviceId", value: id });

        return id;
    }

    return deviceId;
}

export function getDeviceDescriptor() {
    return `${Device.brand} ${Device.modelName} [${DeviceType[Device.deviceType ?? 0]}] (${Device.osName} ${Device.osVersion} - ${Device.osInternalBuildId}) | v${Application.nativeApplicationVersion}`;
}