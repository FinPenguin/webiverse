import { STUDENT_LOGIN } from "./types";

const initialState = {
  studentLoginData: {},
  studentMe: {}
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN:
      return { ...state, studentLoginData: action.payload }
    default:
      return state
  }
}

export default studentReducer