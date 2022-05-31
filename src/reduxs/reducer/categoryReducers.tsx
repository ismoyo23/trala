import { Action, ActionType } from "reduxs/type/category";
interface State {
  category: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  category: [],
  loading: false,
  error: null,
};

export const CategoryReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.CATEGORY_FAIL:
      return {
        loading: true,
        category: [],
        error: null,
      };
    case ActionType.CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload,
        error: null,
      };
    case ActionType.CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
        category: [],
      };

    default:
      return state;
  }
};
