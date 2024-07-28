import React, { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
