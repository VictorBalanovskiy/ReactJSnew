import { ADD_CHAT_ACTION } from "./constans";

const initialState = {
  chatsList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chats: [...state.chatsList, { ...action.payload }],
      };
    }
    default:
      return state;
  }
};
