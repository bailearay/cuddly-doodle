import React from "react";

export const Menu = (props) => {
  const opt1 = props.opt1;
  const opt2 = props.opt2;
  const opt3 = props.opt3;

  return (
    <div>
      <ul className="menu">
        <li className="menu-item">{props.opt1}</li>
        <li className="menu-item">{props.opt2}</li>
        <li className="menu-item">{props.opt3}</li>
      </ul>
    </div>
  );
};
