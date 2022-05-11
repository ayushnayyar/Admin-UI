import React from "react";

import EmployeeDetailsRow from "./EmployeeDetailsRow";

const EmployeeDetailsTable = ({
  paginatedData,
  checked,
  allChecked,
  handleAllChecked,
  handleCheck,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllChecked}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((employee, index) => {
          const { id, name, role, email } = employee;
          const empRole = role.charAt(0).toUpperCase() + employee.role.slice(1);

          return (
            <EmployeeDetailsRow
              key={id}
              empId={id}
              index={index}
              empName={name}
              empRole={empRole}
              empEmail={email}
              checked={checked}
              handleCheck={handleCheck}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeDetailsTable;
