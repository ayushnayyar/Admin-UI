import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
} from "../constants/actionTypes";

const INITIAL_STATE = [];

export const employees = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return action.payload;

    case DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);

    case EDIT_EMPLOYEE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    default:
      return state;
  }
};
