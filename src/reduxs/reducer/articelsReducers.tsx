import { Action, ActionType } from "reduxs/type/articels";
interface State {
  articels: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  articels: [],
  loading: false,
  error: null,
};

export const ArticelsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.ARTICELS_FAIL:
      return {
        loading: true,
        articels: [],
        error: null,
      };
    case ActionType.ARTICELS_SUCCESS:
      return {
        loading: false,
        articels: action.payload,
        error: null,
      };
    case ActionType.ARTICELS_FAIL:
      return {
        loading: false,
        error: action.payload,
        articels: [],
      };

    default:
      return state;
  }
};
