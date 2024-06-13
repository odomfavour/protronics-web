import { companyLinks, industrySolutions, proProducts } from '@/app/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-proDark py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex">
          <div className="w-2/5">
            <div className="w-3/5">
              <div className="relative h-[26px] w-[145px]">
                <Image
                  src="/images/dark-logo.svg"
                  className=" object-contain object-center rounded-2xl "
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  alt="product image"
                />
              </div>
              <p className="text-[#FBF1F1] text-base font-normal my-4">
                Let us unleash our creativity and expertise to create designs
                that deliver extraordinary results.
              </p>
              <ul className="flex gap-6">
                <li>
                  <Link href="#" className="text-[#D0D5DD] font-medium">
                    <div className="rounded-full h-6 w-6 bg-[#F56630] flex items-center justify-center">
                      <FaFacebook />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D0D5DD] font-medium">
                    <div className="rounded-full h-6 w-6 bg-[#F56630] flex items-center justify-center">
                      <FaXTwitter />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D0D5DD] font-medium">
                    <div className="rounded-full h-6 w-6 bg-[#F56630] flex items-center justify-center">
                      <FaInstagram />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D0D5DD] font-medium">
                    <div className="rounded-full h-6 w-6 bg-[#F56630] flex items-center justify-center">
                      <FaLinkedin />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-[#667185] text-base mb-6 font-medium">Company</p>
            <ul>
              {companyLinks.map((companyLink) => (
                <li className="mb-4" key={companyLink.id}>
                  <Link
                    href={companyLink.url}
                    className="text-[#D0D5DD] font-medium"
                  >
                    {companyLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <p className="text-[#667185] text-base mb-6 font-medium">
              Protronics Products
            </p>
            <ul>
              {proProducts.map((prodLink) => (
                <li className="mb-4" key={prodLink.id}>
                  <Link
                    href={prodLink.url}
                    className="text-[#D0D5DD] font-medium"
                  >
                    {prodLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5">
            <p className="text-[#667185] text-base mb-6 font-medium">
              Industry Solutions
            </p>
            <ul>
              {industrySolutions.map((industryLink) => (
                <li className="mb-4" key={industryLink.id}>
                  <Link
                    href={industryLink.url}
                    className="text-[#D0D5DD] font-medium"
                  >
                    {industryLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
