import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavAds } from "../../../redux/actions/profile";

const FavAds = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const favAds = useSelector(state => state.favAds);
  useEffect(() => {
    dispatch(getFavAds(token));
  }, []);
  if (favAds.isLoading) {
    return <></>;
  }
  return (
    <div>
      <h1>fav</h1>
    </div>
  );
};

export default FavAds;
