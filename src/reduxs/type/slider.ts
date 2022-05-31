export enum ActionType {
  SLIDER_PENDING = "SLIDER_PENDING",
  SLIDER_SUCCESS = "SLIDER_SUCCESS",
  SLIDER_FAIL = "SLIDER_FAIL",
}

interface actionPending {
  type: ActionType.SLIDER_PENDING;
}

interface actionSuccess {
  type: ActionType.SLIDER_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.SLIDER_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
