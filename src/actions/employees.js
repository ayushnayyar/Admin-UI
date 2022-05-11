import * as api from "../api";
import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  BATCH_DELETE_EMPLOYEES,
  EDIT_EMPLOYEE,
} from "../constants/actionTypes";

export const getEmployees = () => async (dispatch) => {
  try {
    const response = await api.getEmployees();

    dispatch({ type: GET_EMPLOYEES, payload: response?.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEmployee = (id) => (dispatch) => {
  dispatch({ type: DELETE_EMPLOYEE, payload: id });
};

export const batchDeleteEmployees = (idList) => (dispatch) => {
  dispatch({ type: BATCH_DELETE_EMPLOYEES, payload: idList });
};

export const editEmployee = (employee) => (dispatch) => {
  dispatch({ type: EDIT_EMPLOYEE, payload: employee });
};
