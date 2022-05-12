import React, { useState } from "react";
import { DISPLAY } from "../../../../../constants/strings";

import "./employee-details-data.scss";

const EmployeeDetailsData = ({ mode = DISPLAY, data }) => {
  const [inputValue, setInputValue] = useState(data);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="table__data">
      {mode === DISPLAY ? (
        <span>{data}</span>
      ) : (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="table__data-input"
          />
        </div>
      )}
    </div>
  );
};

export default EmployeeDetailsData;
