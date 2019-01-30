import React from "react";

const profileInfo = props => {
  let hobbies = props.hobbies.map(hobby => {
    return <li key={hobby}>{hobby}</li>;
  });
  let friends = props.friends.map(friend => {
    return <li key={friend}>{friend}</li>;
  });
  return (
    <div>
      <p>{props.bio}</p>
      <hr />
      <ul>{hobbies}</ul>
      <hr />
      <ul>{friends}</ul>
    </div>
  );
};

export default profileInfo;
