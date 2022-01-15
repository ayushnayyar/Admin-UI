import { combineReducers } from "redux";

import { employees } from "./employees";

export const appReducer = combineReducers({
  employees,
});

// export const rootReducer = (state, action) => {
//   if (action.type === "RESET") {
//     return appReducer(undefined, action);
//   }

//   return appReducer(state, action);
// };
