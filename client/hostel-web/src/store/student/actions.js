import ServerApi from "../../utility/ServerApi"
// import { STUDENT_LOGIN } from './types'

export const loginStudent = (rawData, successCallBack) => {
  ServerApi().post('/student/auth/login', rawData)
    .then(res => {
      localStorage.setItem('token', res.token)
      successCallBack()
    })
    .catch(err => {
      console.log(err)
    })
}