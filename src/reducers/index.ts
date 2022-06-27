import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CurrentBackground from "./currentBackground";
import CurrentBasket from "./currentBasket";
import currentCurrency from "./currentCurrency";


const rootReducer = combineReducers({
  currentCurrency: currentCurrency,
  currentBasket: CurrentBasket,
  currentBackground:CurrentBackground
}
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))