import { Button, Card, Form, Input } from 'antd'
import React from 'react'
import { loginStudent } from '../../../../store/student/actions'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const navigate = useNavigate()

  const successCallBack = () => {
    navigate('/student/me')
  }

  const doLogin = (values) => {
    console.log(values)
    loginStudent(values, successCallBack)
  }

  return (
    <Card>
      <Form
        labelCol={{
          span: 4
        }}
        autoComplete="off"
        onFinish={(values) => doLogin(values)}
      >
        <Form.Item
          label='Reg No'
          name="regNo"
          labelAlign="left"
          colon={false}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name="password"
          labelAlign="left"
          colon={false}
        >
          <Input type='password'/>
        </Form.Item>

        <Button 
          className="bg-[#207868] px-8" 
          size="large" 
          type="primary" 
          htmlType="submit"
        >
          Login
        </Button>
        <Button 
          className="bg-[#207868] px-8" 
          size="large" 
          type="primary"
          onClick={() => navigate('/signup/student')}
        >
          signup
        </Button>

      </Form>
    </Card>
  )
}

export default UserLogin