import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../../../actions/employees";
import EmployeeDetailsData from "./EmployeeDetailsData";
import { EDIT, DISPLAY } from "../../../../constants/strings";

import "./employee-details-row.scss";

const EmployeeDetailsRow = ({
  empId,
  index,
  empName,
  empRole,
  empEmail,
  checked,
  handleCheck,
  selectedEmployeeIds,
}) => {
  const dispatch = useDispatch();
  const isSelected = selectedEmployeeIds.includes(empId);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: empName,
    email: empEmail,
    role: empRole,
  });

  const handleSave = () => {};

  return (
    <tr className={`${isSelected ? "table__row-selected" : ""}`}>
      <td className="table__row-checkbox table__row-padding">
        <input
          key={`empId-${checked[index] ? "checked" : "not-checked"}`}
          type="checkbox"
          name={empId}
          value={empId}
          checked={checked[index]}
          onChange={(event) => handleCheck(event, index)}
        />
      </td>
      <td
        className={`table__row-name ${
          editMode ? "table__row-edit-padding" : "table__row-padding"
        }`}
      >
        <EmployeeDetailsData mode={editMode ? EDIT : DISPLAY} data={empName} />
      </td>
      <td
        className={`table__row-email  ${
          editMode ? "table__row-edit-padding" : "table__row-padding"
        }`}
      >
        <EmployeeDetailsData mode={editMode ? EDIT : DISPLAY} data={empEmail} />
      </td>
      <td
        className={`table__row-role ${
          editMode ? "table__row-edit-padding" : "table__row-padding"
        }`}
      >
        <EmployeeDetailsData mode={editMode ? EDIT : DISPLAY} data={empRole} />
      </td>
      <td className="table__row-action table__row-padding">
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Save" : "Edit"}
        </button>{" "}
        <button onClick={() => dispatch(deleteEmployee(empId))}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeDetailsRow;
