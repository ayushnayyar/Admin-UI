import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { batchDeleteEmployees } from "../actions/employees";
import EmployeeDetailsTable from "./EmployeeDetailsTable";
import PaginationBar from "./PaginationBar";

import "../styles/employee-details.scss";

const pageDataLimit = 10;
const paginationLimit = 5;

const EmployeeDetails = ({ employees, searchText }) => {
  const dispatch = useDispatch();
  const initialCheckBoxState = Array(pageDataLimit).fill(false);

  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [paginationGroup, setPaginationGroup] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(initialCheckBoxState);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);

  const lastPage = Math.ceil(filteredEmployees.length / pageDataLimit);

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
  const handleCheck = (event, checkedIndex) => {
    const updatedCheckedState = checked.map((check, index) =>
      index === checkedIndex ? !check : check
    );
    setChecked(updatedCheckedState);

    if (!selectedEmployeeIds.includes(event.target.value)) {
      setSelectedEmployeeIds([...selectedEmployeeIds, event.target.value]);
    } else {
      setSelectedEmployeeIds(
        selectedEmployeeIds.filter((empId) => empId !== event.target.value)
      );
    }
  };

  const handleAllChecked = () => {
    setChecked(Array(pageDataLimit).fill(!allChecked));
    setAllChecked(!allChecked);
  };

  // Delete selected employees functionality
  const deleteSelected = () => {
    dispatch(batchDeleteEmployees(selectedEmployeeIds));
    setChecked(initialCheckBoxState);
    setAllChecked(false);
  };

  // Get/update employee data
  useEffect(() => {
    // Get Paginated data
    const startIndex = page * pageDataLimit - pageDataLimit;
    const endIndex = startIndex + pageDataLimit;
    setPaginatedData(filteredEmployees.slice(startIndex, endIndex));

    // Get pagination group
    const start = Math.floor((page - 1) / paginationLimit) * paginationLimit;
    const numberOfPages = Math.ceil(filteredEmployees.length / pageDataLimit);
    const finalNumOfPages =
      paginationLimit > numberOfPages ? numberOfPages : paginationLimit;
    setPaginationGroup(
      Array(finalNumOfPages)
        .fill()
        .map((_, index) => start + index + 1)
    );
  }, [page, filteredEmployees, searchText]);

  // Filter on search
  useEffect(() => {
    if (searchText.length) {
      const lowerCaseSearchText = searchText.toLowerCase();
      const filterEmployees = employees.filter(
        (employee) =>
          employee.name.toLowerCase().search(lowerCaseSearchText) >= 0 ||
          employee.role.toLowerCase().search(lowerCaseSearchText) >= 0 ||
          employee.email.toLowerCase().search(lowerCaseSearchText) >= 0
      );
      console.log(filterEmployees);
      setFilteredEmployees(filterEmployees);
    } else {
      setFilteredEmployees(employees);
    }
  }, [employees, searchText]);

  // Keep track if all checkboxes are checked
  useEffect(() => {
    const areAllChecked = checked.every((check) => check === true);
    setAllChecked(areAllChecked);
  }, [checked]);

  useEffect(() => {
    if (allChecked) {
      setSelectedEmployeeIds(paginatedData.map((employee) => employee.id));
    } else {
      setSelectedEmployeeIds([]);
    }
  }, [paginatedData, allChecked]);

  return (
    <div>
      <EmployeeDetailsTable
        paginatedData={paginatedData}
        checked={checked}
        allChecked={allChecked}
        handleCheck={handleCheck}
        handleAllChecked={handleAllChecked}
      />
      <PaginationBar
        page={page}
        paginationGroup={paginationGroup}
        goToFirstPage={goToFirstPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        goToLastPage={goToLastPage}
        changePage={changePage}
        lastPage={lastPage}
        checked={checked}
        deleteSelected={deleteSelected}
      />
    </div>
  );
};

export default EmployeeDetails;
