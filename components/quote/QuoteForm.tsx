import React from "react";

const QuoteForm = () => {
  return (
    <section>
      <form action="">
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Please select the services you need
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm text-nowrap font-medium text-gray-900 "
              >
                PCB Assembly
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900"
              >
                PCB Volume
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="inline-checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checked-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                Rework & Repair
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            What, if any materials, do you need PTI to include in the quote?
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                PCB’s
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900"
              >
                Components
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="inline-checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checked-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                Stencil
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Will you require any of these special processes?
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                Environmental Test
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900"
              >
                X ray Inspection
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Do you have a Solder type requirement?
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                Tin/Lead
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900"
              >
                Lead Free
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            What is your required lead time?
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900 "
              >
                Quick Turn 
                <span> ( 1 - 3 days)</span>
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-nowrap text-gray-900"
              >
                Up to 5 days
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm text-nowrap font-medium text-gray-900"
              >
                Up to 10 days
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            What date do you expect your material to be complete? (MM/DD/YY)
          </label>
          <input
            type="date"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="John"
            required
          />
        </div>
        <div className="grid gap-6 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Position/Title
            </label>
            <input
              type="text"
              id="position"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder=""
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
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Location
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            How did you hear about us?
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="mb-4">
          <button className="bg-white rounded px-[24px] py-[10px] font-semibold text-base text-black">
            upload File
          </button>
        </div>
        <ul className="flex gap-3 my-4 flex-wrap">
          <li className="flex gap-2 items-center text-sm">
            <div className="h-[6px] w-[6px] rounded-full bg-proOrange" />
            Bill of materials.{" "}
          </li>
          <li className="flex gap-2 items-center  text-sm">
            {" "}
            <div className="h-[6px] w-[6px] rounded-full bg-proOrange" />
            Gerber Files
          </li>
          <li className="flex gap-2 items-center  text-sm">
            {" "}
            <div className="h-[6px] w-[6px] rounded-full bg-proOrange" />
            Pick & Place Drawing{" "}
          </li>
          <li className="flex gap-2 items-center  text-sm">
            {" "}
            <div className="h-[6px] w-[6px] rounded-full bg-proOrange" />
            Assembly Drawing.{" "}
          </li>
        </ul>
        <div>
          <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
            Submit Request
          </button>
        </div>
      </form>
    </section>
  );
};

export default QuoteForm;
