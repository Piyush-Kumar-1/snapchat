import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactTimeago from "react-timeago";
import "./Chat.css";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";

export default function Chat({
  id,
  profilePic,
  username,
  timestamp,
  imageUrl,
  read,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const open = () => {
    dispatch(selectImage(imageUrl));
    db.collection("posts").doc(id).set(
      {
        read: true,
      },
      { merge: true }
    );
    history.push("/chats/view");
  };

  return (
    <div onClick={open} className="chat">
      <Avatar src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <div>h1</div>
        <p>
          Tap to view-
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
    </div>
  );
}
