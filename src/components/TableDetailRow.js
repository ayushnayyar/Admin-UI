import React from "react";

const TableDetailRow = ({
  empId,
  empName,
  empRole,
  empEmail,
  checked,
  index,
  handleCheck,
  dispatch,
  deleteEmployee,
}) => {
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

export default TableDetailRow;
