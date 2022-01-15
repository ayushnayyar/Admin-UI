import { GET_EMPLOYEES, DELETE_EMPLOYEES } from "../constants/actionTypes";

const INITIAL_STATE = [];

export const employees = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return action.payload;

    case DELETE_EMPLOYEES:
      return state.filter((employee) => employee.id !== action.payload);

    default:
      return state;
  }
};
