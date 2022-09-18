import "./Home.styles.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <div>
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    </div>
  );
};

export default Home;