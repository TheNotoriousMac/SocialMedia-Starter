import "./Home.styles.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";

const Home = () => {
  return (
    <div>
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <div className="rightSide">Rightside</div>
        </div>
    </div>
  );
};

export default Home;