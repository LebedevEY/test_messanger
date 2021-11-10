import { SEND_MESSAGE } from "./types";

const initialState = {
  messages: [],
};

export const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [{ ...action.payload.message }, ...state.messages],
      };
    default:
      return state;
  }
};
