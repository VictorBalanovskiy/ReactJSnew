export const middleware = (state) => (next) => (action) => {
  if (action.type === "PROFILE::CHANGE_USER_NAME_ACTION") {
    setTimeout(() => {}, 1000);
  }
  return next(action);
};
