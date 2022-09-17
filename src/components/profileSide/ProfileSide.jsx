import "./ProfileSide.styles.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard />
    </div>
  );
};

export default ProfileSide;