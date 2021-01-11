import { AppProps as NextAppProps } from 'next/dist/next-server/lib/router/router';
import { Fragment } from 'react';
import { PageWithLayout } from '../types';

import '../styles/globals.css';
import 'antd/dist/antd.css';

type AppProps = NextAppProps & {
  Component: PageWithLayout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = Component?.Layout ?? Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
