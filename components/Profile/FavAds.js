import { useEffect } from "react";
import { getFavAds } from "../../redux/actions/profile";
import { useSelector, useDispatch } from "react-redux";

const FavAds = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getFavAds(token));
  }, []);
  return <div></div>;
};

export default FavAds;
