import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const page = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <div className="flex md:flex-row flex-col pt-[100px] gap-10">
          <div className="w-1/2 flex items-center">
            <div>
              <p>Contact Us</p>
              <p>
                The volume for PCB assembly at ProTronics depends more on the
                design of the circuit board{' '}
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#FFF4F0]">
                  <FaEnvelope />
                </div>
                <p>info@protronics.com</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#FFF4F0]">
                  <FaEnvelope />
                </div>
                <p>info@protronics.com</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-100 p-10">
              <p>Ready to get started? </p>
              <p>Contact us!</p>
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
                      placeholder="John"
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
                      placeholder="Flowbite"
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
                      placeholder="Doe"
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
                      placeholder="123-45-678"
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
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder="john.doe@company.com"
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
                    placeholder="Write your thoughts here..."
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
    </section>
  );
};

export default page;
