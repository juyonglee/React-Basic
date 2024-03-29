import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))
