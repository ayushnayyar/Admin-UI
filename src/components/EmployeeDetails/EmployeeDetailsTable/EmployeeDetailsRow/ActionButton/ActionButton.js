import React from "react";

const ActionButton = ({ text, onClick, classNames }) => {
  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
