import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteEmployee } from "../actions/employees";
import "../styles/employee-details.scss";
import PaginationBar from "./PaginationBar";

const pageDataLimit = 10;
const pageNumberLimit = 5;

const EmployeeDetails = ({ employees, searchText }) => {
  const dispatch = useDispatch();
  const lastPage = Math.ceil(employees.length / pageDataLimit);

  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [paginatedData, setPaginatedData] = useState([]);
  const [paginationGroup, setPaginationGroup] = useState([]);

  const changePage = (event) => {
    const pageIndex = event.target.textContent;
    console.log(pageIndex);
    setPage(pageIndex);
    // console.log(page);
    // getPaginatedData();
  };

  const goToFirstPage = () => {
    if (page !== 1) {
      setPage(1);
    }
  };

  const goToNextPage = () => {
    console.log(lastPage);
    if (page !== lastPage) {
      const nextPage = page + 1;
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

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    setChecked(allChecked);
  };

  useEffect(() => {
    // Get Paginated data
    const startIndex = page * pageDataLimit - pageDataLimit;
    const endIndex = startIndex + pageDataLimit;

    setPaginatedData(employees.slice(startIndex, endIndex));
    console.log("Page: ", page);

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
                defaultChecked={allChecked}
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
          {paginatedData.map((employee) => {
            const role =
              employee.role.charAt(0).toUpperCase() + employee.role.slice(1);

            if (
              employee.name.search(searchText) >= 0 ||
              employee.role.search(searchText) >= 0 ||
              employee.email.search(searchText) >= 0
            ) {
              return (
                <tr key={employee.id}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={() => handleCheck}
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{role}</td>
                  <td>
                    <button>Edit</button>{" "}
                    <button
                      onClick={() => dispatch(deleteEmployee(employee.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
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
      />
    </div>
  );
};

export default EmployeeDetails;
