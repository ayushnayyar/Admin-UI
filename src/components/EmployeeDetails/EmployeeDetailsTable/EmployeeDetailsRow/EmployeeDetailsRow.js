import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee, editEmployee } from "../../../../actions/employees";
import EmployeeDetailsData from "./EmployeeDetailsData";
import ActionButton from "./ActionButton";
import { EDIT, DISPLAY } from "../../../../constants/strings";

import "./employee-details-row.scss";
import Checkbox from "../Checkbox";

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
  const [tempFormData, setTempFormData] = useState(formData);

  const handleEditOrSaveClick = () => {
    if (editMode) {
      dispatch(editEmployee(formData));
    }
    setTempFormData(formData);
    setEditMode(!editMode);
  };

  const handleDeleteOrCancelClick = () => {
    if (!editMode) {
      dispatch(deleteEmployee(empId));
    } else {
      setFormData(tempFormData);
      setEditMode(!editMode);
    }
  };

  return (
    <tr className={`${isSelected ? "table__row-selected" : ""}`}>
      <td className="table__row-checkbox table__row-padding">
        <Checkbox
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
      <td className="table__row-actions table__row-padding">
        <ActionButton
          text={editMode ? "Save" : "Edit"}
          classNames={"table__row-action table__row-action-edit"}
          onClick={handleEditOrSaveClick}
        />
        &nbsp;
        <ActionButton
          text={editMode ? "Cancel" : "Delete"}
          classNames={"table__row-action table__row-action-delete"}
          onClick={handleDeleteOrCancelClick}
        />
      </td>
    </tr>
  );
};

export default EmployeeDetailsRow;
