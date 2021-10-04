import { CHANGE_CONDITION } from "./types/types";

const initialState = {
  profileCondition: false,
};

const ConditionReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CHANGE_CONDITION:
      return {
        ...state,
        profileCondition: payload,
      };
    default:
      return state;
  }
};

export default ConditionReducer;
