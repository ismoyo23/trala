import axios from "axios";
import { Action, ActionType } from "reduxs/type/articels";
import { Dispatch } from "redux";

export const Articels = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ARTICELS_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/Testing/Article`,
        headers: {
          Authorization: `Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==`,
        },
      });

      dispatch({
        type: ActionType.ARTICELS_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.ARTICELS_FAIL,
        payload: err.message,
      });
    }
  };
};
