import React from "react";
import ProfilePhoto from "./profile-info/ProfilePhoto";
import UserInfo from "./profile-info/UserInfo";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "My Profile Photo",
      username: "aslaker",
      bio:
        "Here are all of the things about me.  They are interesting things.  You should read them",
      hobbies: [
        "Activities",
        "More Activities",
        "Even More Activities",
        "Snowboarding"
      ],
      friends: ["Bob", "Brigitte", "Lindsay", "Lydia", "Jeremy"]
    };
  }

  render() {
    return (
      <div>
        <ProfilePhoto photo={this.state.photo} username={this.state.username} />
        <UserInfo
          bio={this.state.bio}
          hobbies={this.state.hobbies}
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default ProfilePage;
