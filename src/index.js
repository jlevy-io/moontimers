import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SWRConfig } from "swr";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import Theme from "containers/Theme";
import Time from "containers/Time";
import App from "containers/App";
import "assets/fonts/ds-digi.woff2";
import "assets/fonts/chirp-regular-web.woff2";
import "assets/fonts/chirp-bold-web.woff2";
import "assets/fonts/chirp-heavy-web.woff2";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

if (process.env.REACT_APP_ENV !== "development") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Time>
      <SWRConfig value={{ revalidateOnFocus: false }}>
        <Theme>
          <Router>
            <App />
          </Router>
        </Theme>
      </SWRConfig>
    </Time>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
