import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import reducer from "./reducers";


const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const makeStore = (context) => createStore(reducer, composeEnhancers(applyMiddleware(...middleware)) );
export const wrapper = createWrapper(makeStore, { debug: true });
