// Profile.js
import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import FollowButton from "./FollowButton";

const Profile = ({ profile, mobile, imageSize = 55 }) => {
  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      {/* Avatar */}
      <ProfileAvatar
        profileId={profile.id}
        image={profile.image}
        owner={profile.owner}
        size={imageSize}
      />

      {/* Kullanıcı adı */}
      <ProfileInfo owner={profile.owner} />

      {/* Follow / Unfollow butonu */}
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        <FollowButton profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
