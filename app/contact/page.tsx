import { Metadata } from 'next';
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Contact Us - Protronics-inc',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

const page = () => {
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="flex lg:flex-row flex-col py-10 gap-10">
            <div className="lg:w-1/2 w-full flex items-center">
              <div>
                <p className="font-bold text-center lg:text-left text-[44px] lg:text-[56px] text-black mb-6">
                  Contact Us
                </p>
                <p className="text-lg font-normal text-center lg:text-left text-black mb-12">
                  The volume for PCB assembly at ProTronics depends more on the
                  design of the circuit board{' '}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[48px] w-[48px] flex items-center text-proOrange justify-center rounded-full bg-[#FFF4F0]">
                    <FaRegEnvelope />
                  </div>
                  <p>
                    <a
                      href="mailto:sales@protronics-inc.com"
                      className="text-blue-500 underline"
                    >
                      sales@protronics-inc.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[48px] w-[48px] flex items-center text-proOrange justify-center rounded-full bg-[#FFF4F0]">
                    <LuPhone />
                  </div>
                  <p>
                    <a
                      href="tel:+19192170007"
                      className="text-blue-500 underline"
                    >
                      Support: +1 919-217-0007
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-100 md:p-10 p-5 mb-10 rounded-[10px]">
                <p className="font-normal text-[36px] mb-8 text-[#101928] leading-[43px]">
                  Ready to get started?<br></br> Contact us!
                </p>
                {/* <p className="font-normal text-[36px] mb-5 text-[#101928] leading-[43px]">
                Contact us!
              </p> */}
                <form action="">
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
