import React from "react";

const PaginationButton = ({ text, disabled, classNames, onClick }) => {
  return (
    <button disabled={disabled} className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default PaginationButton;
