import axios from "axios";
import { Action, ActionType } from "reduxs/type/auth";
import { Dispatch } from "redux";

export const SignIn = (username: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AUTH_PENDING,
    });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}/Auth/login`,
        data: {
          username: username,
          password: password,
          deviceID: 1,
        },
      });

      dispatch({
        type: ActionType.AUTH_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.AUTH_FAIL,
        payload: err.message,
      });
    }
  };
};
