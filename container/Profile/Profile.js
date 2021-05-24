import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserAds from "../../components/Profile/UserAds";
import FavAds from "../../components/Profile/FavAds";

const Profile = () => {
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(async () => {
    if (!isLoggedIn) router.push("/login");
  }, []);
  return (
    <>
      <UserAds />
      <FavAds />
    </>
  );
};

export default Profile;
