import { SEND_MESSAGE } from "./types";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          { author: action.payload.author, message: action.payload.message },
        ],
      };
    default:
      return state;
  }
};
