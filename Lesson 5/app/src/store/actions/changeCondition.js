import { CHANGE_CONDITION } from "../types/types";

export const changeCondition = (value) => ({
  type: CHANGE_CONDITION,
  payload: value,
});
