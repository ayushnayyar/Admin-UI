import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteEmployee } from "../actions/employees";
import "../styles/employee-details.scss";
import PaginationBar from "./PaginationBar";
import TableDetailRow from "./TableDetailRow";

const pageDataLimit = 10;
const pageNumberLimit = 5;

const EmployeeDetails = ({ employees, searchText }) => {
  const dispatch = useDispatch();
  const lastPage = Math.ceil(employees.length / pageDataLimit);

  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(Array(pageDataLimit).fill(false));
  const [allChecked, setAllChecked] = useState(
    checked.filter((check) => check).length === checked.length
  );
  const [paginatedData, setPaginatedData] = useState([]);
  const [paginationGroup, setPaginationGroup] = useState([]);

  // Pagination Functions
  const changePage = (event) => {
    const pageIndex = event.target.textContent;
    setPage(parseInt(pageIndex));
  };

  const goToFirstPage = () => {
    if (page !== 1) {
      setPage(1);
    }
  };

  const goToNextPage = () => {
    if (page !== lastPage) {
      const nextPage = page + 1;
      console.log(nextPage);
      setPage(nextPage);
    }
  };

  const goToPreviousPage = () => {
    if (page !== 1) {
      const previousPage = page - 1;
      setPage(previousPage);
    }
  };

  const goToLastPage = () => {
    if (page !== lastPage) {
      setPage(lastPage);
    }
  };

  // Handling checkbox functionality
  const handleCheck = (checkedIndex) => {
    const updatedCheckedState = checked.map((check, index) =>
      index === checkedIndex ? !check : check
    );
    setChecked(updatedCheckedState);
  };

  const handleAllChecked = () => {
    setChecked(Array(pageDataLimit).fill(!allChecked));
    setAllChecked(!allChecked);
  };

  useEffect(() => {
    // Get Paginated data
    const startIndex = page * pageDataLimit - pageDataLimit;
    const endIndex = startIndex + pageDataLimit;

    setPaginatedData(employees.slice(startIndex, endIndex));

    // Get pagination group
    let start = Math.floor((page - 1) / pageNumberLimit) * pageNumberLimit;
    setPaginationGroup(
      Array(pageNumberLimit)
        .fill()
        .map((_, idx) => start + idx + 1)
    );
  }, [page, employees]);

  return (
    <div>
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
            const empName = employee.name;
            const empRole =
              employee.role.charAt(0).toUpperCase() + employee.role.slice(1);
            const empEmail = employee.email;

            const lowerCaseSearchText = searchText.toLowerCase();

            if (
              empName.toLowerCase().search(lowerCaseSearchText) >= 0 ||
              empRole.toLowerCase().search(lowerCaseSearchText) >= 0 ||
              empEmail.toLowerCase().search(lowerCaseSearchText) >= 0
            ) {
              return (
                <TableDetailRow
                  key={Math.random()}
                  empId={employee.id}
                  empName={empName}
                  empRole={empRole}
                  empEmail={empEmail}
                  checked={checked}
                  index={index}
                  handleCheck={handleCheck}
                  dispatch={dispatch}
                  deleteEmployee={deleteEmployee}
                />
              );
            }

            return <></>;
          })}
        </tbody>
      </table>
      <PaginationBar
        page={page}
        paginationGroup={paginationGroup}
        goToFirstPage={goToFirstPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        goToLastPage={goToLastPage}
        changePage={changePage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default EmployeeDetails;
