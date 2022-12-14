import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";

import "./index.css";
import App from "./App";
//reportWebVitals ?
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./Redux/Reducer/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
