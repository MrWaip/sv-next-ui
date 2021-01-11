import { Col, Row } from 'antd';
import { FC } from 'react';

export const AuthLayout: FC = ({ children }) => (
  <>
    <Row style={{ minHeight: '100vh' }} justify="center" align="middle">
      <Col span={6}>{children}</Col>
    </Row>
  </>
);
