import { ADD_CHAT, DELETE_CHAT, CHANGE_CONDITION } from "./types/types";

const initialState = {
  profileCondition: false,
};

const Reducer = (state = initialState, { payload, type }) => {
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

/* const initialState = {
  firstchat: [{ id: 0, name: "Олег", text: "Привет" }],
  secondchat: [
    { id: 0, name: "Борис", text: "Ку-ку" },
    { id: 1, name: "Степан", text: "Ку" },
  ],
  nextchat: [],
};

const Reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CHAT:
      return {
        ...state,
        firstchat: [
          ...state.firstchat,
          { id: state.firstchat.length, text: payload },
        ],
      };
    case DELETE_CHAT:
      return {
        ...state,
        firstchat: state.firstchat.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
}; */

export default Reducer;
