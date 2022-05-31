import { combineReducers } from "redux";
// =============================================
// import from reducers auth

import { AuthReducer } from "./reducer/authReducers";
import { SliderReducer } from "./reducer/sliderReducers";
import { ContentReducer } from "./reducer/contentReducers";
import { ArticelsReducer } from "./reducer/articelsReducers";
import { CategoryReducer } from "./reducer/categoryReducers";

// export combine reducers
export const RootState = combineReducers({
  auth: AuthReducer,
  slider: SliderReducer,
  content: ContentReducer,
  articels: ArticelsReducer,
  category: CategoryReducer,
});

export type RootState = ReturnType<typeof RootState>;
export default RootState;
