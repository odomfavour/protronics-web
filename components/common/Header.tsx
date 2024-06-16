'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/app/utils/data';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaHamburger } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let parentSet = false;
    navLinks.forEach((itemLink: any) => {
      if (itemLink.children) {
        itemLink.children.forEach((subLink: any) => {
          if (pathname === subLink.url) {
            setActiveParent(itemLink.id);
            parentSet = true;
          }
        });
      }
    });
    if (!parentSet) {
      setActiveParent(null);
    }
  }, [pathname]);

  const handleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full top-0 z-40 left-0 fixed bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)]">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Image
              src="/images/pro-logo.svg"
              width="74"
              height="34"
              alt="logo"
            />
          </Link>
          <ul className="md:flex items-center gap-12 hidden">
            {navLinks.map((itemLink: any, index: number) => (
              <li
                key={itemLink.id}
                className="relative group"
                ref={(el) => {
                  dropdownRefs.current[index] = el;
                }}
              >
                {itemLink.children ? (
                  <button
                    className={`text-base text-[#101928] font-normal pb-2 flex items-center ${
                      pathname === itemLink.url || activeParent === itemLink.id
                        ? 'font-semibold'
                        : 'font-normal'
                    }`}
                    onClick={() => handleDropdown(itemLink.id)}
                  >
                    {itemLink.name}
                    {itemLink.children && (
                      <span
                        className={`ml-2 transform transition-transform ${
                          openDropdown === itemLink.id
                            ? 'rotate-180'
                            : 'rotate-0'
                        }`}
                      >
                        <FaChevronDown />
                      </span>
                    )}
                  </button>
                ) : (
                  <Link
                    href={itemLink.url}
                    className="text-base text-[#101928] font-normal pb-2 flex items-center"
                  >
                    {itemLink.name}
                  </Link>
                )}
                {itemLink.children && openDropdown === itemLink.id && (
                  <ul className="absolute bg-white shadow-lg mt-2 min-w-[180px] opacity-100 transition-opacity duration-300">
                    {itemLink.children.map((subLink: any) => (
                      <li key={subLink.id}>
                        <Link
                          href={subLink.url}
                          className="block px-4 py-2 text-[#101928] hover:bg-gray-200"
                          onClick={closeDropdown}
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-[8px] w-[8px] rounded-full bg-[#98A2B3]" />{' '}
                            {subLink.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="md:flex items-center gap-4 hidden">
            <Link href="/" className="text-proOrange">
              Login
            </Link>
            <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
              Get a quote
            </button>
          </div>
          <div
            className="hamburger cursor-pointer md:hidden block"
            onClick={toggleMobileMenu}
          >
            <FaHamburger role="button" className="text-[#F37B23] text-3xl" />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-0 left-0 h-screen bg-white">
          {navLinks.map((itemLink) => (
            <Link
              href={itemLink.url}
              key={itemLink.id}
              className="block py-2 px-4 text-[#101928] hover:bg-gray-200"
              onClick={closeMobileMenu}
            >
              {itemLink.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
