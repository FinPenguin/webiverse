import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStudentMe } from '../../../store/student/actions'

const StudentMe = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudentMe())
  }, [dispatch])

  return (
    <div>StudentMe</div>
  )
}

export default StudentMe