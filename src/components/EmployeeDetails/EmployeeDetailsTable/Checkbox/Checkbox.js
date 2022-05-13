import React from "react";

const Checkbox = ({ value, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
