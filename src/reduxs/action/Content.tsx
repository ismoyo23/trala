import axios from "axios";
import { Action, ActionType } from "reduxs/type/content";
import { Dispatch } from "redux";

export const Content = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CONTENT_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/Testing/content`,
        headers: {
          Authorization: `Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==`,
        },
      });

      dispatch({
        type: ActionType.CONTENT_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.CONTENT_FAIL,
        payload: err.message,
      });
    }
  };
};
