import React from "react";
import styles from "../../styles/Profile.module.css";

const ProfileInfo = ({ owner }) => {
  return (
    <div className={`mx-2 ${styles.Wordbreak}`}>
      <strong>{owner}</strong>
    </div>
  );
};

export default ProfileInfo;
