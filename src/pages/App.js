import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeDetails from "../components/EmployeeDetails";
import { useDispatch, useSelector } from "react-redux";

import { getEmployees } from "../actions/employees";
import "../styles/app.scss";

const App = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [searchText, setSearchText] = useState("");

  const setSearchTerm = (searchTerm) => {
    setSearchText(searchTerm);
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="app__container">
      <SearchBar searchText={searchText} setSearchTerm={setSearchTerm} />
      <EmployeeDetails employees={employees} searchText={searchText} />
    </div>
  );
};

export default App;
