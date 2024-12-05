import { ReactNode } from "react";
import PageWrapper from "./PageWrapper";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <PageWrapper>{children}</PageWrapper>;
}
