interface Auth {
  username: string;
  password: string;
}
export enum ActionType {
  AUTH_PENDING = "AUTH_PENDING",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAIL = "AUTH_FAIL",
}

interface actionPending {
  type: ActionType.AUTH_PENDING;
}

interface actionSuccess {
  type: ActionType.AUTH_SUCCESS;
  payload: any[];
}

interface actionFail {
  type: ActionType.AUTH_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
