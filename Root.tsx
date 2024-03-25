import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import App from "./App";
import { setReloadApp } from "./lib/reloadApp";
import { store } from "./components/core/state/store";
import { Provider } from "react-redux";
import ErrorFallback from "./components/util/ErrorFallback";
import ErrorBoundary from "./components/util/ErrorBoundary";
import { Text, TextInput } from "react-native";

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
  TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;

export default function Root() {
  const [key, setKey] = useState(0);
  setReloadApp(() => setKey(key + 1));

  return (
    <Provider store={store} key={`${key}`}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <App key={`${key}`} resetKey={`${key}`} />
      </ErrorBoundary>
    </Provider>
  );
}
