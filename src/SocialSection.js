import React from "react";
import slackLogo from './icons/slacklogo.png'
import githubLogo from './icons/githublogo.png'

const SocialSection = () => {
    // let imgone = './icons/githublogo.png'
  return (
    <div className="socialSection">
        <img className="logo" src={slackLogo} alt="not slack"></img>
        <img className="logo" src={githubLogo} alt="slack"></img>
    </div>
  );
};

export default SocialSection;
