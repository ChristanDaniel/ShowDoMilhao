import { createStore, applyMiddleware } from "redux";

import { reducersCombined } from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => {
  let store = createStore(
    reducersCombined,

    preloadedState,

    applyMiddleware(thunk)
  );

  if (process.env.NODE_ENV === "development") {
    store = createStore(
      reducersCombined,

      preloadedState,

      composeWithDevTools(applyMiddleware(thunk))
    );
  }

  return store;
};

const store = configureStore()

export default store 
