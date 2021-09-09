import { ADD_MESSAGE_ACTION } from "./constans";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});
