import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function UserCard({ user }) {
  return (
    <Card
      style={{
        width: "40%",
        margin: "1%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        avatar={
          <Avatar
            style={{ backgroundColor: "#00d89b", marginBottom: "30px" }}
            aria-label="recipe"
          >
            {user.username.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={user.username}
        subheader={"joined " + user.biography}
      />

      <CardContent>
        <FavoriteIcon style={{ color: "red" }} />
        <Typography variant="body2" color="text.primary">
          {user.upvotes + " upvotes"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
