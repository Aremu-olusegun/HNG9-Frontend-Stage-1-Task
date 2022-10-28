import React from "react";

const Button = ({classIds, urlLink, buttonText, subText}) => {
  return (
    <div>
      <button id={classIds} className="button">
        <a href={urlLink}>
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
