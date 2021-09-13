import { ADD_CHAT_ACTION } from "./constans";
import { DELETE_CHAT_ACTION } from "./constans";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (payload) => ({
  type: DELETE_CHAT_ACTION,
  payload,
});
