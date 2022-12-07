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
        width: "50%",
        margin: "1%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        style={{ display: "flex", flexDirection: "column" }}
        avatar={
          <Avatar style={{ backgroundColor: "indigo" }} aria-label="recipe">
            {user.username.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={user.username}
        // subheader={"joined " + user.dateJoined}
      />

      <CardContent>
        <FavoriteIcon style={{ color: "pink" }} />
        <Typography variant="body2" color="text.secondary">
          {user.upvotes + " upvotes"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
