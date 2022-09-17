import "./ProfileSide.styles.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  );
};

export default ProfileSide;