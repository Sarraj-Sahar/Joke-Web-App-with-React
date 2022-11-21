import Card from "react-bootstrap/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
function JokeCard({ joke }) {
  return (
    // <h1>{joke.title}</h1>
    <Card style={{ width: "50%", margin: "1%" }}>
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
