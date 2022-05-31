import { Action, ActionType } from "reduxs/type/content";
interface State {
  content: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  content: [],
  loading: false,
  error: null,
};

export const ContentReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.CONTENT_FAIL:
      return {
        loading: true,
        content: [],
        error: null,
      };
    case ActionType.CONTENT_SUCCESS:
      return {
        loading: false,
        content: action.payload,
        error: null,
      };
    case ActionType.CONTENT_FAIL:
      return {
        loading: false,
        error: action.payload,
        content: [],
      };

    default:
      return state;
  }
};
