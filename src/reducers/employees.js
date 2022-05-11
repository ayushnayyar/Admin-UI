import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  BATCH_DELETE_EMPLOYEES,
} from "../constants/actionTypes";

const INITIAL_STATE = [];

export const employees = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return action.payload;

    case DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);

    case BATCH_DELETE_EMPLOYEES:
      return state.filter((employee) => !action.payload.includes(employee.id));

    case EDIT_EMPLOYEE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    default:
      return state;
  }
};
