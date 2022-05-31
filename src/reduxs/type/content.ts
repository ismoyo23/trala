export enum ActionType {
  CONTENT_PENDING = "CONTENT_PENDING",
  CONTENT_SUCCESS = "CONTENT_SUCCESS",
  CONTENT_FAIL = "CONTENT_FAIL",
}

interface actionPending {
  type: ActionType.CONTENT_PENDING;
}

interface actionSuccess {
  type: ActionType.CONTENT_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.CONTENT_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
