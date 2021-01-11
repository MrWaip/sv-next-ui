import { Button, Card, Form, Input, Row } from 'antd';
import { AuthLayout } from '../../layouts';
import { PageWithLayout } from '../../types';

const Login: PageWithLayout = () => {
  return (
    <Form name="basic">
      <Card title="Login page here">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Row justify="center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Card>
    </Form>
  );
};

export default Login;
Login.Layout = AuthLayout;
