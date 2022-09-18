import "./Profile.styles.css";
import RightSide from "../../components/rightSide/RightSide";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/postSide/PostSide";

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
            <ProfileCard />
            <PostSide />
        </div>
        <RightSide />
    </div>
  );
};

export default Profile;