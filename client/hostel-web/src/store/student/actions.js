import ServerApi from "../../utility/ServerApi"
// import { STUDENT_LOGIN } from './types'

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

export const fetchStudentMe = () => {
  ServerApi().get('/student/me')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}