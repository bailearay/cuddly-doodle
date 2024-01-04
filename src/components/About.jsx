import React from "react";
import { Menu } from "./Menu";

export const About = () => {
  return (
    <div className="page dark">
      <Menu opt1={"Home"} opt2={"Skills"} opt3={"Contact"} />
      <div>
        <h1 className="title">About</h1>
      </div>
      <div className="summary">
        <h2>Experience</h2>
        <p>My experience is....</p>
      </div>
    </div>
  );
};
