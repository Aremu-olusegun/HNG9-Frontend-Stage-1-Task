import React from "react";
import shareIcon from './icons/small icon.png'
import mobileIcon from './icons/Mobile Icon.png'
import profileImg from './icons/coder.png'

const Profile = () => {
  return (
    <div className="profile">
      <img id="profile__img" alt="profile-img" src={profileImg}/>
      <h2 id="twitter">Online printer</h2>
      <p id="slack" className="hide">Aremu Olusegun</p>
      <div className="icon-background">
        <img src={shareIcon} alt="share icon" className="seen"></img>
        <img src={mobileIcon} alt="mobile icon" className="seen2"></img>
      </div>
    </div>
  );
};

export default Profile;






