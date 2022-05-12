import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee, editEmployee } from "../../../../actions/employees";
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
    id: empId,
    name: empName,
    email: empEmail,
    role: empRole,
  });

  const handleEditClick = () => {
    console.log("Edit/Save clicked");
    if (editMode) {
      dispatch(editEmployee(formData));
    }
    setEditMode(!editMode);
  };

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
        <EmployeeDetailsData
          mode={editMode ? EDIT : DISPLAY}
          data={formData.name}
          updateValue={(newName) => setFormData({ ...formData, name: newName })}
        />
      </td>
      <td
        className={`table__row-email  ${
          editMode ? "table__row-edit-padding" : "table__row-padding"
        }`}
      >
        <EmployeeDetailsData
          mode={editMode ? EDIT : DISPLAY}
          data={formData.email}
          updateValue={(newEmail) =>
            setFormData({ ...formData, email: newEmail })
          }
        />
      </td>
      <td
        className={`table__row-role ${
          editMode ? "table__row-edit-padding" : "table__row-padding"
        }`}
      >
        <EmployeeDetailsData
          mode={editMode ? EDIT : DISPLAY}
          data={formData.role}
          updateValue={(newRole) => setFormData({ ...formData, role: newRole })}
        />
      </td>
      <td className="table__row-action table__row-padding">
        <button onClick={handleEditClick}>{editMode ? "Save" : "Edit"}</button>{" "}
        <button onClick={() => dispatch(deleteEmployee(empId))}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeDetailsRow;
