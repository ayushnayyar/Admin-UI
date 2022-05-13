import React from "react";
import EmployeeDetailsRow from "./EmployeeDetailsRow";
import Checkbox from "./Checkbox";

import "./employee-details-table.scss";

const EmployeeDetailsTable = ({
  paginatedData,
  checked,
  allChecked,
  handleAllChecked,
  handleCheck,
  selectedEmployeeIds,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="table__head-checkbox">
            <Checkbox
              value={"Select All"}
              checked={allChecked}
              onChange={handleAllChecked}
            />
          </th>
          <th className="table__head-name">Name</th>
          <th className="table__head-email">Email</th>
          <th className="table__head-role">Role</th>
          <th className="table__head-actions">Actions</th>
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
              selectedEmployeeIds={selectedEmployeeIds}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeDetailsTable;
