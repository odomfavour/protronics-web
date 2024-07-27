import { ReactNode } from 'react';
import DashboardWrapper from './DashboardWrapper';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
