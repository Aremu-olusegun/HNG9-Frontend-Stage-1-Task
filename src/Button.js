import React from "react";

const Button = ({ classIds, urlLink, buttonText, subText }) => {
  return (
    <div>
      <button className="button">
        <a href={urlLink} id={classIds}>
          {buttonText}
        </a>
        <div>
          <p className="subText">{subText}</p>
        </div>
      </button>
    </div>
  );
};

export default Button;
