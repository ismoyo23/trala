import axios from "axios";
import { Action, ActionType } from "reduxs/type/category";
import { Dispatch } from "redux";

export const Category = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CATEGORY_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/Testing/article/category`,
        headers: {
          Authorization: `Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==`,
        },
      });

      dispatch({
        type: ActionType.CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.CATEGORY_FAIL,
        payload: err.message,
      });
    }
  };
};
