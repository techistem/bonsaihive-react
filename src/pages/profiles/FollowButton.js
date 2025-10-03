import React from "react";
import { Button } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const FollowButton = ({ profile }) => {
  const currentUser = useCurrentUser();
  const { handleFollow, handleUnfollow } = useSetProfileData();
  const is_owner = currentUser?.username === profile.owner;

  if (!currentUser || is_owner) return null;

  return profile.following_id ? (
    <Button
      className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
      onClick={() => handleUnfollow(profile)}
    >
      unfollow
    </Button>
  ) : (
    <Button
      className={`${btnStyles.Button} ${btnStyles.Black}`}
      onClick={() => handleFollow(profile)}
    >
      follow
    </Button>
  );
};

export default FollowButton;
