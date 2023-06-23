import { Button, Card, Form, Input } from 'antd'
import { registerStudent } from '../../../../store/student/actions'
import { useNavigate } from 'react-router-dom'

const StudentSignup = () => {

  const navigate = useNavigate()

  const successCallback = () => {
    navigate('/login/student')
  }

  const doSignup = (values) => {
    registerStudent(values, successCallback)
  }

  return (
    <Card>
      <Form
        labelCol={{
          span: 4
        }}
        autoComplete="off"
        onFinish={(values) => doSignup(values)}
      >
        <Form.Item
          label='Name'
          name="name"
          labelAlign="left"
          colon={false}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Reg No'
          name="regNo"
          labelAlign="left"
          colon={false}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Block'
          name="block"
          labelAlign="left"
          colon={false}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='roomNo'
          name="roomNo"
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
          SignUp
        </Button>

      </Form>
    </Card>
  )
}

export default StudentSignup