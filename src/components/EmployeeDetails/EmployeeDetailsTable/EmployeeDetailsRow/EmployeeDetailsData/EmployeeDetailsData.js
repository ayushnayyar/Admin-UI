import React from "react";
import { DISPLAY } from "../../../../../constants/strings";

import "./employee-details-data.scss";

const EmployeeDetailsData = ({ mode = DISPLAY, data, updateValue }) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    updateValue(newValue);
  };

  return (
    <div className="table__data">
      {mode === DISPLAY ? (
        <span>{data}</span>
      ) : (
        <div>
          <input
            type="text"
            value={data}
            onChange={handleInputChange}
            className="table__data-input"
          />
        </div>
      )}
    </div>
  );
};

export default EmployeeDetailsData;
