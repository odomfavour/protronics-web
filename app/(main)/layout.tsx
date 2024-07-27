import { ReactNode } from 'react';
import PageWrapper from './PageWrapper';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <PageWrapper>{children}</PageWrapper>;
}
