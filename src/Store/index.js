import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./Chats/reducer";
import { messageReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer,
  }),
  applyMiddleware(thunk)
);
