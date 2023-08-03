import "@/styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
