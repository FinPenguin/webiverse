import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentMe } from '../../../store/student/actions'

const StudentMe = () => {

  const dispatch = useDispatch()

  const data = useSelector(state => state.student.studentMe);

  console.log(data)

  useEffect(() => {
    fetchStudentMe()
  }, [dispatch])

  return (
    <div>StudentMe</div>
  )
}

export default StudentMe