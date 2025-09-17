import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../styles/App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

console.log("appStyles:", appStyles);

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${appStyles.popularProfilesContainer} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <div className={appStyles.popularProfilesBox}>
          <p className={appStyles.popularProfilesTitle}>
            Most followed profiles
          </p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </div>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
