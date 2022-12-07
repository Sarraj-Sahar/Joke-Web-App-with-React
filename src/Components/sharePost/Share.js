import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

export default function Share() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // const [img, setImage] = useState("");

  const handlePostJoke = (event) => {
    event.preventDefault();
    const body = {
      title: title,
      jokeText: text,
      jokeMedia: "",
      author: user.username,
    };
    fetch("https://jokeproject.onrender.com/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    }).then(result => result.json())
    .then((result) => {
      if(result.joke) window.location.reload(true);
      else console.log(result);
    });
    //navigate("/");
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="Add joke title"
            className="shareInput"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Share a joke !"
            className="shareInput"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
          <button className="shareButton" onClick={handlePostJoke}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
