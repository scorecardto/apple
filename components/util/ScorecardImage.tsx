import { Image } from "react-native";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";

export default function ScorecardImage(
  props:
    | {
        id: string;
        width: number;
        height: number;
        contain?: false;
      }
    | {
        id: string;
        contain: true;
      }
) {
  const dir = FileSystem.cacheDirectory + "images/";
  const file = dir + props.id;

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (!props.id) return;
    (async () => {
      const info = await FileSystem.getInfoAsync(file);
      if (!info.exists) {
        await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
        await FileSystem.downloadAsync(
          `https://api.scorecardgrades.com/v1/images/get/${props.id}`,
          file
        );

        setRefresh(!refresh);
      }
    })();
  }, [file]);

  if (!props.id) return null;

  if (props.contain) {
    return (
      <Image
        source={{ uri: file, cache: "reload" }}
        key={"" + refresh}
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: "contain",
        }}
      />
    );
  } else {
    return (
      <Image
        source={{ uri: file, cache: "reload" }}
        key={"" + refresh}
        width={props.width}
        height={props.height}
      />
    );
  }
}
