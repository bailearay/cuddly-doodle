import React from "react";

export const Menu = (props) => {
  const opt1 = props.opt1;
  const opt2 = props.opt2;
  const opt3 = props.opt3;

  return (
    <>
      <a className="menu-item " href={`#${opt1}`}>
        {opt1}
      </a>
      <a className="menu-item " href={`#${opt2}`}>
        {opt2}
      </a>
      <a className="menu-item " href={`#${opt3}`}>
        {opt3}
      </a>
    </>
  );
};
