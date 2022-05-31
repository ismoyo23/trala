import { Action, ActionType } from "reduxs/type/auth";
interface State {
  auth: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  auth: [],
  loading: false,
  error: null,
};

export const AuthReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.AUTH_FAIL:
      return {
        loading: true,
        auth: [],
        error: null,
      };
    case ActionType.AUTH_SUCCESS:
      return {
        loading: false,
        auth: action.payload,
        error: null,
      };
    case ActionType.AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
        auth: [],
      };

    default:
      return state;
  }
};
