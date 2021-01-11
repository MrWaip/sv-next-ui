import { NextPage } from 'next';
import { ReactNode } from 'react';

export type PageWithLayout = NextPage & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Layout?: (props: { children: ReactNode }) => any;
};
