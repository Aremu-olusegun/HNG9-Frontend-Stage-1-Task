import React from "react";

import Button from "./Button";
import { buttonData } from "./buttonData";

const LinkSection = () => {
  return (
    <div className="LinkSection">
      {buttonData.map(button => {
        return(
          <Button key={button.id} {...button}/>
        )
      })}
    </div>
  );
};

export default LinkSection;
