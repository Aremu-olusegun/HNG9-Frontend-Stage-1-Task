import React from "react";
import {Link} from "react-router-dom"

const Button = ({ classIds, urlLink, buttonText, subText }) => {
  const URL_PREFIX = ["https", "http"]
  const is_http_link = URL_PREFIX.some((prefix) => urlLink.includes(prefix))
  return is_http_link ? (
      <a 
      href={urlLink} 
      id={classIds} 
      className="button" 
      title={subText}  
      target="_blank" 
      rel="noreferer noreferrer">
        {buttonText}
      </a>
  ) : (
    <Link to={urlLink} className="button" target="_blank">{buttonText}</Link>
  )
};

export default Button;
