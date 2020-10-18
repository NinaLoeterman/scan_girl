import React from "react";
import "./HomePage.styles.scss";

const text = {
  hopfully:
    "Hopefully you got here because you scanned a QR somewhere out there.",
  welcome: "Welcome. And thank you for your curiosity.",
};

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className={"HomePage_welcome_text_wrapper"}>
        <div className={"HomePage_welcome_text"}>{text.hopfully}</div>
        <div className={"HomePage_welcome_text"}>{text.welcome}</div>
      </div>
    </div>
  );
};

export default HomePage;
