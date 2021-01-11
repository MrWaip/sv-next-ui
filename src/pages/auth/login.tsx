import { Button } from 'antd';
import { CRMLayout } from '../../layouts/crm.layout';
import { PageWithLayout } from '../../types';

const Login: PageWithLayout = () => {
  return (
    <div>
      Login page here
      <Button>Wow btn</Button>
    </div>
  );
};

export default Login;
Login.Layout = CRMLayout;
