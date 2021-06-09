import React from "react";
import FavAds from "../components/pages/profile/FavAds";
import PersonalAds from "../components/pages/profile/PersonalAds";

const Profile = () => {
  return (
    <div className="page-start container">
      <PersonalAds />
      <FavAds />
    </div>
  );
};

export default Profile;
