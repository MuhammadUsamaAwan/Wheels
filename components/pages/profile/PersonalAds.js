import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonalAds } from "../../../redux/actions/profile";

const PersonalAds = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const personalAds = useSelector(state => state.personalAds);
  useEffect(() => {
    dispatch(getPersonalAds(token));
  }, []);
  if (personalAds.isLoading) {
    return <></>;
  }
  return (
    <div>
      <h1>personal</h1>
    </div>
  );
};

export default PersonalAds;
