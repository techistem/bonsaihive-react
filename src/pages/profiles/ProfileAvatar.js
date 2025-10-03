import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const ProfileAvatar = ({ profileId, image, owner, size }) => {
  return (
    <Link to={`/profiles/${profileId}`} className="align-self-center">
      <Avatar src={image} alt={`${owner}'s profile picture`} height={size} />
    </Link>
  );
};

export default ProfileAvatar;
