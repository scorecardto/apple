import { View, Animated } from "react-native";
import { useCallback, useEffect, useMemo, useRef } from "react";
import MediumText from "../../text/MediumText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SvgXml } from "react-native-svg";
export default function GiantCustomizeCard(props: { increment(): void }) {
  const scale = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    const l1 = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 0.95,
          delay: 2500,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          delay: 300,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    );

    l1.start();

    return () => {
      l1.stop();
    };
  }, []);

  // print every time l1 reaches 1

  const incremented = useRef(false);

  const increment = useCallback(() => {
    const t = setTimeout(() => {
      props.increment();
    }, 100);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const l = scale.addListener((e) => {
      if (e.value < 0.96) {
        if (incremented.current) return;

        incremented.current = true;

        increment();
      } else {
        incremented.current = false;
      }
    });

    return () => {
      scale.removeListener(l);
    };
  }, []);

  // useEffect(() => {
  //   increment();
  //   const interval = setInterval(() => {
  //     increment();
  //   }, 2975);
  //   return () => clearInterval(interval);
  // }, []);

  const xml = `<svg width="74" height="79" viewBox="0 0 74 79" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.34256 12.8262C5.39402 9.32286 6.99173 4.85351 10.7769 3.53329L11.2954 3.35242C14.1682 2.35042 17.3573 3.54168 18.8247 6.20692C20.7829 9.76341 22.5178 13.0879 24.0639 16.2764C24.7378 15.5496 25.595 14.9697 26.6093 14.616L27.1278 14.4351C30.0006 13.4331 33.1897 14.6244 34.6571 17.2896C34.8951 17.7218 35.1297 18.1505 35.3611 18.576C35.9686 16.7979 37.3343 15.2929 39.2752 14.616L39.7937 14.4351C42.6665 13.4331 45.8556 14.6244 47.323 17.2896C47.8211 18.1942 48.3047 19.0838 48.7744 19.9599L52.0384 18.8304C54.3731 18.0224 56.9816 18.6382 58.6129 20.4935C71.2684 34.8862 72.4884 45.6251 70.7573 63.2899C70.7408 63.459 70.7173 63.6268 70.687 63.7928L70.7204 63.8019C68.3455 86.3631 32.7226 71.7181 18.8693 63.4061L18.9108 63.3724C10.0137 57.8289 3.70592 50.1053 3.07187 45.7651C2.72924 43.4197 3.66129 41.4608 4.98576 39.9176C7.74698 36.7004 12.528 38.2198 15.3416 41.3913C17.0256 43.2895 18.7109 44.9767 20.4681 46.5277C17.9192 35.2917 14.4074 25.5283 7.34256 12.8262Z" fill="white"/>
  <path d="M10.7769 3.53329L11.559 5.77567L11.559 5.77567L10.7769 3.53329ZM7.34256 12.8262L5.26712 13.9805L5.26712 13.9805L7.34256 12.8262ZM11.2954 3.35242L10.5133 1.11004L10.5133 1.11004L11.2954 3.35242ZM18.8247 6.20692L20.9051 5.06149L20.9051 5.06149L18.8247 6.20692ZM24.0639 16.2764L21.927 17.3125L23.4428 20.4387L25.8052 17.8912L24.0639 16.2764ZM26.6093 14.616L27.3914 16.8583L27.3914 16.8583L26.6093 14.616ZM27.1278 14.4351L26.3457 12.1927L26.3457 12.1927L27.1278 14.4351ZM34.6571 17.2896L32.5767 18.435L32.5767 18.435L34.6571 17.2896ZM35.3611 18.576L33.2749 19.7107L35.8597 24.4631L37.6085 19.3437L35.3611 18.576ZM39.2752 14.616L40.0573 16.8583L40.0573 16.8583L39.2752 14.616ZM39.7937 14.4351L39.0116 12.1927L39.0116 12.1927L39.7937 14.4351ZM47.323 17.2896L45.2427 18.435L45.2427 18.435L47.323 17.2896ZM48.7744 19.9599L46.6814 21.0821L47.638 22.8663L49.5511 22.2042L48.7744 19.9599ZM52.0384 18.8304L51.2617 16.5861L51.2617 16.5861L52.0384 18.8304ZM58.6129 20.4935L56.8295 22.0617L58.6129 20.4935ZM70.7573 63.2899L68.3938 63.0583L68.3938 63.0583L70.7573 63.2899ZM70.687 63.7928L68.3507 63.367L67.96 65.5107L70.0622 66.084L70.687 63.7928ZM70.7204 63.8019L73.0822 64.0505L73.2936 62.0421L71.3452 61.5107L70.7204 63.8019ZM18.8693 63.4061L17.3717 61.5629L14.7422 63.6994L17.6474 65.4425L18.8693 63.4061ZM18.9108 63.3724L20.4084 65.2155L22.9915 63.1168L20.1667 61.3567L18.9108 63.3724ZM3.07187 45.7651L0.721949 46.1084L0.721949 46.1084L3.07187 45.7651ZM4.98576 39.9176L6.78788 41.4644L6.78788 41.4644L4.98576 39.9176ZM15.3416 41.3913L13.5651 42.9673L15.3416 41.3913ZM20.4681 46.5277L18.8966 48.3082L24.4115 53.176L22.7841 46.0023L20.4681 46.5277ZM9.99474 1.29091C4.75646 3.11797 2.63397 9.24631 5.26712 13.9805L9.41799 11.6719C8.15407 9.39941 9.22699 6.58904 11.559 5.77567L9.99474 1.29091ZM10.5133 1.11004L9.99474 1.29091L11.559 5.77567L12.0775 5.5948L10.5133 1.11004ZM20.9051 5.06149C18.8688 1.36309 14.4604 -0.266648 10.5133 1.11004L12.0775 5.5948C13.8761 4.96749 15.8457 5.72027 16.7443 7.35235L20.9051 5.06149ZM26.2008 15.2402C24.6333 12.0076 22.8787 8.64612 20.9051 5.06149L16.7443 7.35235C18.687 10.8807 20.4023 14.1681 21.927 17.3125L26.2008 15.2402ZM25.8271 12.3736C24.4378 12.8582 23.2537 13.6574 22.3225 14.6615L25.8052 17.8912C26.222 17.4417 26.7523 17.0813 27.3914 16.8583L25.8271 12.3736ZM26.3457 12.1927L25.8271 12.3736L27.3914 16.8583L27.9099 16.6775L26.3457 12.1927ZM36.7375 16.1442C34.7012 12.4458 30.2928 10.816 26.3457 12.1927L27.9099 16.6775C29.7085 16.0502 31.6781 16.8029 32.5767 18.435L36.7375 16.1442ZM37.4474 17.4413C37.214 17.0121 36.9774 16.5798 36.7375 16.1442L32.5767 18.435C32.8128 18.8637 33.0455 19.2889 33.2749 19.7107L37.4474 17.4413ZM38.4931 12.3736C35.8172 13.3069 33.9409 15.387 33.1138 17.8083L37.6085 19.3437C37.9962 18.2087 38.8514 17.2789 40.0573 16.8583L38.4931 12.3736ZM39.0116 12.1927L38.493 12.3736L40.0573 16.8583L40.5759 16.6775L39.0116 12.1927ZM49.4034 16.1442C47.3671 12.4458 42.9587 10.816 39.0116 12.1927L40.5759 16.6775C42.3744 16.0502 44.3441 16.8029 45.2427 18.435L49.4034 16.1442ZM50.8675 18.8378C50.3933 17.9534 49.9055 17.056 49.4034 16.1442L45.2427 18.435C45.7367 19.3324 46.2161 20.2142 46.6814 21.0821L50.8675 18.8378ZM51.2617 16.5861L47.9978 17.7156L49.5511 22.2042L52.8151 21.0746L51.2617 16.5861ZM60.3964 18.9253C58.0909 16.3033 54.4535 15.4815 51.2617 16.5861L52.8151 21.0746C54.2927 20.5633 55.8722 20.973 56.8295 22.0617L60.3964 18.9253ZM73.1209 63.5216C73.9929 54.6225 74.1565 47.189 72.3842 40.0895C70.5989 32.9379 66.9034 26.3255 60.3964 18.9253L56.8295 22.0617C62.9779 29.0541 66.2201 35.0076 67.7759 41.2399C69.3447 47.5241 69.2528 54.2925 68.3938 63.0583L73.1209 63.5216ZM73.0234 64.2187C73.0655 63.988 73.098 63.7553 73.1209 63.5215L68.3938 63.0583C68.3836 63.1626 68.3692 63.2656 68.3507 63.367L73.0234 64.2187ZM71.3452 61.5107L71.3119 61.5016L70.0622 66.084L70.0956 66.0931L71.3452 61.5107ZM17.6474 65.4425C24.7213 69.6868 37.373 75.5749 48.6968 77.522C54.3301 78.4906 59.985 78.548 64.5017 76.6093C69.2514 74.5704 72.4067 70.4676 73.0822 64.0505L68.3586 63.5533C67.8466 68.4168 65.6585 70.9439 62.6281 72.2447C59.3647 73.6455 54.8028 73.7524 49.5017 72.841C38.9571 71.0278 26.8707 65.4374 20.0912 61.3697L17.6474 65.4425ZM17.4133 61.5292L17.3717 61.5629L20.3668 65.2493L20.4084 65.2155L17.4133 61.5292ZM0.721949 46.1084C1.14183 48.9826 3.26467 52.4322 6.10482 55.6807C9.02989 59.0263 13.0112 62.4946 17.655 65.388L20.1667 61.3567C15.9134 58.7066 12.2922 55.5415 9.68059 52.5544C6.98404 49.4701 5.63595 46.8878 5.42178 45.4218L0.721949 46.1084ZM3.18363 38.3709C1.57601 40.244 0.248651 42.8685 0.721949 46.1084L5.42178 45.4218C5.20983 43.971 5.74658 42.6776 6.78788 41.4644L3.18363 38.3709ZM17.1182 39.8152C15.4248 37.9065 13.0854 36.4195 10.6047 35.929C8.0426 35.4224 5.22666 35.9905 3.18363 38.3709L6.78788 41.4644C7.50608 40.6276 8.46127 40.3468 9.68339 40.5885C10.9869 40.8462 12.4449 41.7046 13.5651 42.9673L17.1182 39.8152ZM22.0397 44.7472C20.3599 43.2645 18.7426 41.6463 17.1182 39.8152L13.5651 42.9673C15.3086 44.9326 17.062 46.6889 18.8966 48.3082L22.0397 44.7472ZM5.26712 13.9805C12.2227 26.4862 15.6532 36.0378 18.1521 47.0531L22.7841 46.0023C20.1851 34.5455 16.5921 24.5705 9.41799 11.6719L5.26712 13.9805Z" fill="black"/>
  </svg>
  `;

  return (
    <View
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <Animated.View
        style={{
          transform: [{ scale }],
          // opacity: opacity,/
        }}
      >
        <View
          style={{
            width: "100%",
            height: 54,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            marginBottom: 16,
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#FEC83C",
                width: 64,
                height: 54,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* @ts-ignore */}
              <MaterialCommunityIcons name={"star"} size={24} color="white" />
            </View>
            <MediumText
              style={{
                fontSize: 18,
                paddingLeft: 22,
              }}
            >
              Customize
            </MediumText>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          right: 15,
          top: 8,
          transform: [
            {
              scale: scale.interpolate({
                inputRange: [0.95, 1],
                outputRange: [0.7, 1],
              }),
            },
          ],
        }}
      >
        <SvgXml xml={xml} width={50} />
      </Animated.View>
    </View>
  );
}
