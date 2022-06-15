import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import currentCurrency from "./currentCurrency";

const rootReducer = combineReducers({
  currentCurrency: currentCurrency
}
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))