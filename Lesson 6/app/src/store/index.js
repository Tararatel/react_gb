import { createStore, combineReducers } from "redux";
import ConditionReducer from "./ConditionReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ChatReducer from "./ChatReducer";
import MessageReducer from "./MessageReducer";

const rootReducer = combineReducers({
  ConditionReducer,
  ChatReducer,
  MessageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
