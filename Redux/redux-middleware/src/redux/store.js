import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer/rootReducer";

function middleware01(store) {
  console.log("Middleware01", 0)
  return (next) => {
    console.log("Middleware01", 1)
    return (action) => {
      console.log("Middleware01", 2)
      const returnValue = next(action)
      console.log("Middleware01", 3)
      return returnValue
    }
  }
}

export const store = createStore(rootReducer, applyMiddleware(middleware01))
