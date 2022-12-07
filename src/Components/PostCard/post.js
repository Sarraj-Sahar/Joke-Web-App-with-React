import Card from "react-bootstrap/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
function JokeCard({ joke }) {
  return (
    // <h1>{joke.title}</h1>
    <Card style={{ width: "80%", margin: "1%" }}>
      <Card.Body>
        <Card.Title style={{ float: "left" }}>{joke.title}</Card.Title>

        <Card.Text style={{ display: "inline-block", textAlign: "left" }}>
          {joke.text}
        </Card.Text>
        <div className="bottomCard">
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="left"
            float="right"
          >
            {joke.time}/{joke.date}
          </Typography>
          <div className="buttons">
            <IconButton aria-label="add to favorites">
              <p className="likes_text">{joke.likes}</p>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon style={{ color: "#00B2FF" }} />
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon style={{ color: "56a822" }} />
            </IconButton>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default JokeCard;

// import "./post.css";
// import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
// import { useState } from "react";

// export default function Post({ post }) {
//   const [like, setLike] = useState(post.like);
//   const [isLiked, setIsLiked] = useState(false);

//   const likeHandler = () => {
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };
//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img
//               className="postProfileImg"
//               src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//               alt=""
//             />
//             <span className="postUsername">
//               {Users.filter((u) => u.id === post?.userId)[0].username}
//             </span>
//             <span className="postDate">{post.date}</span>
//           </div>
//           <div className="postTopRight">
//             <MoreVert />
//           </div>
//         </div>
//         <div className="postCenter">
//           <span className="postText">{post?.desc}</span>
//           <img className="postImg" src={post.photo} alt="" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img
//               className="likeIcon"
//               src="assets/like.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <img
//               className="likeIcon"
//               src="assets/heart.png"
//               onClick={likeHandler}
//               alt=""
//             />
//             <span className="postLikeCounter">{like} people like it</span>
//           </div>
//           <div className="postBottomRight">
//             <span className="postCommentText">{post.comment} comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
