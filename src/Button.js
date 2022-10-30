import React from "react";

const Button = ({ classIds, urlLink, buttonText, subText }) => {
  console.log(classIds);
  return (
    <div>
      <a href={urlLink} id={classIds} className="button" title={subText}  target="_blank">
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
