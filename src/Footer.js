import React from "react";
import zuriLogo from './icons/zuri-intern.jpg'
import ingressiveGood from './icons/ingresive.webp'

const Footer = () => {
  return (
    <div className="footer">
      <div className="content2">
        <div className="border">
          <img
            src={zuriLogo}
            alt="myimage"
          ></img>
        </div>
        <div className="border">
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className="border">
          <img
            src={ingressiveGood}
            alt="myimage"
            className="hngLogo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
