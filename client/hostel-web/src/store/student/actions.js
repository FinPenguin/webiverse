import ServerApi from "../../utility/ServerApi"
import { STUDENT_ME } from './types'

export const registerStudent = (rawData, successCallBack) => {
  ServerApi().post('/student/auth/register', rawData)
    .then(res => {
      console.log(res)
      successCallBack()
    })
    .catch(err => {
      console.log(err)
    })
}

export const loginStudent = (rawData, successCallBack) => {
  ServerApi().post('/student/auth/login', rawData)
    .then(res => {
      const userData = res.data
      localStorage.setItem("userData", JSON.stringify(userData))
      successCallBack()
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchStudentMe = () => dispatch => {
  ServerApi().get('/student/me')
    .then(res => {
      console.log(res)
      dispatch({
        type: STUDENT_ME,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}