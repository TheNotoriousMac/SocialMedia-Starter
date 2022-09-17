import "./Home.styles.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div>
        <div className="Home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    </div>
  );
};

export default Home;