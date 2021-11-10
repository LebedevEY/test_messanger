import { SEND_MESSAGE } from "./types";

export const sendMessage = (message, author) => ({
  type: SEND_MESSAGE,
  payload: { message, author },
});
