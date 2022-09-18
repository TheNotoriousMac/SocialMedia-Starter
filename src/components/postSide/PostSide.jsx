import PostShare from "../postShare/PostShare";
import Posts from "../posts/Posts";
import "./PostSide.styles.css";

const PostSide = () => {
  return (
    <div className="PostSide">
        <PostShare />
        <Posts />
    </div>
  );
};

export default PostSide;