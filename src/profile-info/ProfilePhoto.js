import React from "react";

const profilePhoto = props => {
  return (
    <div>
      <h1>{props.photo}</h1>
      <h3>{props.username}</h3>
    </div>
  );
};

export default profilePhoto;
