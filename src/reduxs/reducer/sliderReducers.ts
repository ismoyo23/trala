import { Action, ActionType } from "reduxs/type/slider";
interface State {
  slider: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  slider: [],
  loading: false,
  error: null,
};

export const SliderReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.SLIDER_FAIL:
      return {
        loading: true,
        slider: [],
        error: null,
      };
    case ActionType.SLIDER_SUCCESS:
      return {
        loading: false,
        slider: action.payload,
        error: null,
      };
    case ActionType.SLIDER_FAIL:
      return {
        loading: false,
        error: action.payload,
        slider: [],
      };

    default:
      return state;
  }
};
