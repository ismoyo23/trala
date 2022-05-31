export enum ActionType {
  CATEGORY_PENDING = "CATEGORY_PENDING",
  CATEGORY_SUCCESS = "CATEGORY_SUCCESS",
  CATEGORY_FAIL = "CATEGORY_FAIL",
}

interface actionPending {
  type: ActionType.CATEGORY_PENDING;
}

interface actionSuccess {
  type: ActionType.CATEGORY_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.CATEGORY_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
