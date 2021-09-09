import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import {
  showUserNameSelector,
  userNameSelector,
} from "../../Store/Profile/selectors";

export const Profile = () => {
  const userName = useSelector(userNameSelector);
  const showUserName = useSelector(showUserNameSelector);

  const dispatch = useDispatch();

  const handleToggleUserName = useCallback(() => {
    dispatch(toggleUserNameAction);
  }, [dispatch]);

  return (
    <div>
      <div>Your profile</div>
      <input type="checkbox" onClick={handleToggleUserName} />

      {showUserName && <div>{userName}</div>}
    </div>
  );
};
