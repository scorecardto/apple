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
