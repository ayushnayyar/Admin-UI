import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/employees";

const EmployeeDetailsRow = ({
  empId,
  index,
  empName,
  empRole,
  empEmail,
  checked,
  handleCheck,
}) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <input
          key={`empId-${checked[index] ? "checked" : "not-checked"}`}
          type="checkbox"
          name={empId}
          value={empId}
          checked={checked[index]}
          onChange={(event) => handleCheck(event, index)}
        />
      </td>
      <td>{empName}</td>
      <td>{empEmail}</td>
      <td>{empRole}</td>
      <td>
        <button>Edit</button>{" "}
        <button onClick={() => dispatch(deleteEmployee(empId))}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeDetailsRow;
