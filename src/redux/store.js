import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./features/questionSlice";
import resultReducer from "./features/resultSlice";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
