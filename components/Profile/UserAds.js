import { useEffect } from "react";
import { getPersonalAds } from "../../redux/actions/profile";
import { useSelector, useDispatch } from "react-redux";

const UserAds = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getPersonalAds(token));
  }, []);
  return <div></div>;
};

export default UserAds;
