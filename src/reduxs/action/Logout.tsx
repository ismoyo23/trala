import { Action, ActionType } from "reduxs/type/auth";
import { Dispatch } from "redux";

export const Logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AUTH_FAIL,
      payload: "",
    });
  };
};
