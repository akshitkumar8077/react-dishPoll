import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import dishPoll from "./reducers";

// Creating a Store

const store = createStore(dishPoll);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();
