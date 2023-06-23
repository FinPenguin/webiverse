import { STUDENT_LOGIN, STUDENT_ME } from "./types";

const initialState = {
  studentLoginData: {},
  studentMe: {}
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN:
      return { ...state, studentLoginData: action.payload }

    case STUDENT_ME:
      return { ...state, studentMe: action.payload }

    default:
      return state
  }
}

export default studentReducer