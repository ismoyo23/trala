import axios from "axios";
import { Action, ActionType } from "reduxs/type/slider";
import { Dispatch } from "redux";

export const Slide = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SLIDER_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/Testing/slide/v2`,
        headers: {
          Authorization: `Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==`,
        },
      });

      dispatch({
        type: ActionType.SLIDER_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SLIDER_FAIL,
        payload: err.message,
      });
    }
  };
};
