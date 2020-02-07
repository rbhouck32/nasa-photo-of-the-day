import React from "react";
import "./PostCard.css";

const PostCard = props => {
  console.log(props);
  return (
    <div className="card-container">
      <div className="title-date">
        <h3>{`Title: ${props.data.title}`}</h3>
        <h3>{`Date: ${props.data.date}`}</h3>
      </div>
      <img alt="card-thumbnail" className="post-image" src={props.data.url} />
    </div>
  );
};

export default PostCard;
