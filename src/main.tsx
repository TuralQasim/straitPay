import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import Reducer from "./store/Reducer.js";
const store = legacy_createStore(Reducer);
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
