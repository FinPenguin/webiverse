import React from 'react'
//import test from '../../../assets/Graduation_Cap.png'
import './loginstyles.css'

const Login = (props) => {
  return (
    
    <div className='container'>
      <div className='leaverequests'>
        <img
          src="/Graduation_Cap.png"
          alt="Rectangle626970"
          className='rectangle62'
        />
        <span className='text'>
          <span>Uni-Verse</span>
        </span>
        <img
          src="/Graduation_Cap.png"
          alt="GraduationCap6972"
          className='graduation-cap'
        />
        <div className='frame41'>
          <span className='text02'>
            <span>Leave Requests</span>
          </span>
          <span className='text04'>
            <span>Complaint Requests</span>
          </span>
          <span className='text06'>
            <span>Mess Requests</span>
          </span>
          <span className='text08'>
            <span>Room Requests</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login