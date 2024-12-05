"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/app/utils/data";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isMobileMenuOpen && (
        <div className="fixed top-0 w-full  z-30">
          <div className="bg-black ">
            <div className="lg:max-w-[1440px] mx-auto">
              <div className=" w-11/12 mx-auto py-[15px] text-white text-xs font-medium xl:gap-[299px] flex lg:flex-row flex-col gap-3 items-center">
                <div className="flex gap-[16px]">
                  <p className="text-[#E3EFFC] text-nowrap ">Contact Us</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/svg/header-phone-icon.svg"
                      alt="phone icon"
                      width={16}
                      height={16}
                    />
                    <a className="text-nowrap" href="tel:+19192170007">
                      +1 919-217-0007
                    </a>
                  </div>
                </div>
                <div className="flex mx-auto gap-[16px]">
                  <p className="text-[#E3EFFC] text-nowrap ">Send a Mail</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/svg/header-email-icon.svg"
                      alt="email icon"
                      width={16}
                      height={16}
                    />
                    <a
                      className="text-nowrap"
                      href="mail:sales@protronics-inc.com"
                    >
                      sales@protronics-inc.com
                    </a>
                  </div>
                </div>
                <div className="lg:ml-auto hidden lg:block">
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        href="https://www.facebook.com/ProTronicsInc"
                        className="text-[#D0D5DD] font-medium"
                      >
                        <div className="rounded-full h-6 w-6 bg-proOrange flex items-center justify-center">
                          <FaFacebook />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/"
                        className="text-[#D0D5DD] font-medium"
                      >
                        <div className="rounded-full h-6 w-6 bg-proOrange  flex items-center justify-center">
                          <FaXTwitter />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://instagram.com/"
                        className="text-[#D0D5DD] font-medium"
                      >
                        <div className="rounded-full h-6 w-6 bg-proOrange  flex items-center justify-center">
                          <FaInstagram />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/protronics-incorporated"
                        className="text-[#D0D5DD] font-medium"
                      >
                        <div className="rounded-full h-6 w-6 bg-proOrange  flex items-center justify-center">
                          <FaLinkedin />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className="w-full  bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)]">
            <div className="max-w-[1440px] w-full  mx-auto">
              <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center py-5">
                  <Link href="/">
                    <Image
                      src="/images/svg/proLogo.svg"
                      width="148"
                      height="31"
                      alt="logo"
                    />
                  </Link>
                  <ul className="lg:flex items-center gap-12 hidden">
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
                            className={`text-base text-[#101928] font-normal  flex items-center ${
                              pathname === itemLink.url ||
                              activeParent === itemLink.id
                                ? "font-semibold"
                                : "font-normal"
                            }`}
                            onClick={() => handleDropdown(itemLink.id)}
                          >
                            {itemLink.name}
                            {itemLink.children && (
                              <span
                                className={`ml-2 transform transition-transform ${
                                  openDropdown === itemLink.id
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              >
                                <FaChevronDown />
                              </span>
                            )}
                          </button>
                        ) : (
                          <Link
                            href={itemLink.url}
                            className="text-base text-[#101928] font-normal  flex items-center"
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
                                    <div className="h-[8px] w-[8px] rounded-full bg-[#98A2B3]" />{" "}
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
                  <div className="lg:flex items-center gap-4 hidden">
                    <Link href="/" className="text-proOrange">
                      Login
                    </Link>
                    <Link
                      href="/quote"
                      className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white"
                    >
                      Get a quote
                    </Link>
                  </div>
                  <div
                    className="hamburger cursor-pointer lg:hidden block"
                    onClick={toggleMobileMenu}
                  >
                    <GiHamburgerMenu
                      role="button"
                      className="text-[#034592] text-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
      {isMobileMenuOpen && isMobileView && (
        <div className="fixed h-full z-40 top-0 left-0 w-2/3 bg-white p-3">
          <div>
            <div className=" flex justify-between items-center">
              <Link href="/">
                <Image
                  src="/images/svg/proLogo.svg"
                  width="74"
                  height="34"
                  alt="logo"
                />
              </Link>
              <div>
                <FaX
                  className="text-lg text-[#034592]"
                  role="button"
                  onClick={closeMobileMenu}
                />
              </div>
            </div>
            <div className="mt-4">
              {navLinks.map((itemLink: any, index: number) => (
                <li
                  key={itemLink.id}
                  className="relative group list-none mb-3"
                  ref={(el) => {
                    dropdownRefs.current[index] = el;
                  }}
                >
                  {itemLink.children ? (
                    <button
                      className={`text-base text-[#101928] font-normal pb-2 flex items-center ${
                        pathname === itemLink.url ||
                        activeParent === itemLink.id
                          ? "font-semibold"
                          : "font-normal"
                      }`}
                      onClick={() => handleDropdown(itemLink.id)}
                    >
                      {itemLink.name}
                      {itemLink.children && (
                        <span
                          className={`ml-2 transform transition-transform ${
                            openDropdown === itemLink.id
                              ? "rotate-180"
                              : "rotate-0"
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
                      onClick={closeMobileMenu}
                    >
                      {itemLink.name}
                    </Link>
                  )}
                  {itemLink.children && openDropdown === itemLink.id && (
                    <ul className="absolute z-40 bg-white shadow-lg mt-2 min-w-[180px] opacity-100 transition-opacity duration-300">
                      {itemLink.children.map((subLink: any) => (
                        <li key={subLink.id}>
                          <Link
                            href={subLink.url}
                            className="block px-4 py-2 text-[#101928] hover:bg-gray-200"
                            onClick={closeMobileMenu}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-[8px] w-[8px] rounded-full bg-[#98A2B3]" />{" "}
                              {subLink.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-proOrange"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link
                  href="/quote"
                  className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white"
                  onClick={closeMobileMenu}
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
