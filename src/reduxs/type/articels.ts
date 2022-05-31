export enum ActionType {
  ARTICELS_PENDING = "ARTICELS_PENDING",
  ARTICELS_SUCCESS = "ARTICELS_SUCCESS",
  ARTICELS_FAIL = "ARTICELS_FAIL",
}

interface actionPending {
  type: ActionType.ARTICELS_PENDING;
}

interface actionSuccess {
  type: ActionType.ARTICELS_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.ARTICELS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
