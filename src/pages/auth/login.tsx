import { Button, Card, Form, Input, Row } from 'antd';
import { InputWithValidation } from '../../components/forms/input';
import { AuthLayout } from '../../layouts';
import { PageWithLayout } from '../../types';

const Login: PageWithLayout = () => {
  return (
    <Form name="basic">
      <Card title="Login page here">
        <InputWithValidation label="FUCK U" name="fc_u" />

        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
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
