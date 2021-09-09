import { TOGGLE_SHOW_USER_NAME_ACTION } from "./constans";

const initialState = {
  userName: "Name",
  showUserName: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_USER_NAME_ACTION: {
      return {
        ...state,
        showUserName: !state.showUserName,
      };
    }
    default:
      return state;
  }
};
