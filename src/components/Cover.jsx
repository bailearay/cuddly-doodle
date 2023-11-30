import React from "react";
import { Menu } from "./Menu";

export const Cover = () => {
  return (
    <div className="page">
      <Menu opt1={"About"} opt2={"Skills"} opt3={"Contact"} />
      <div className="greet">
        <p className="message">
          Welcome! My name is <p className="name">Bailea Ray</p> <br /> I am a
          Web Application Development Intern and BAS <br />
          Information Technology Spring 2024 greduate.
        </p>
      </div>
    </div>
  );
};
