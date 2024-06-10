'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/app/utils/data';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full  top-0 z-40 left-0 fixed bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)] bg-">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-5 ">
          <Link href="/">
            <Image
              src="/images/pro-logo.svg"
              width="74"
              height="34"
              alt="logo"
            />
          </Link>
          <ul className="md:flex items-center gap-12 hidden">
            {navLinks.map((itemLink: any) => (
              <li key={itemLink.id}>
                <Link
                  href={itemLink.url}
                  className={`text-base text-[#101928] font-normal pb-2 ${
                    pathname === itemLink.url ? ' font-semibold' : 'font-normal'
                  }`}
                >
                  {itemLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:flex items-center gap-4 hidden">
            <Link href="/" className="text-proOrange">
              Login
            </Link>
            <button className="bg-proOrange  rounded px-[24px] py-[10px] font-semibold text-base text-white">
              Get a quote
            </button>
          </div>
          <div className="hamburger cursor-pointer md:hidden block">
            {/* <FaHamburger role="button" className="text-[#F37B23] text-3xl" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
