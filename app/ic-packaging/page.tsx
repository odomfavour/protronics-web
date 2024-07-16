"use client";
import HeaderBar from "@/components/common/HeaderBar";
import GetStarted from "@/components/landing/GetStarted";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const accordionData = [
  {
    title: "Design & Development",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {" "}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{" "}
          </li>{" "}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Die Attach",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">
            Manual and automated, precision die placement
          </li>
          <li className="list-disc mb-2">
            Conductive and nonconductive organic (epoxy) die attach materials
          </li>
          <li className="list-disc mb-2">Eutectic die attach </li>
        </ul>
      </>
    ),
  },
  {
    title: "Die Encapsulation",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">Programmed Die Encapsulation </li>
          <li className="list-disc mb-2"> Hermetic ceramic packaging</li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Solder lid seal</li>
            <li className="list-disc mb-2">Parallel seam sealing</li>
          </ul>
          <li className="list-disc mb-2">Glob top</li>{" "}
          <li className="list-disc mb-2">Dam and fill</li>
        </ul>
      </>
    ),
  },
  {
    title: "Wire Bonding",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">Manual and automated wire bonding </li>
          <li className="list-disc mb-2">Aluminum and gold wire</li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Wedge and ball bonding</li>
          </ul>
          <li className="list-disc mb-2">Fine pitch (down to 50 µm)</li>
          <li className="list-disc mb-2">High wire count</li>
          <li className="list-disc mb-2">
            wire bonding to ceramic, organic and metal packages{" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Flip Chip Assembly",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">Eutectic and high Pb solders </li>
          <li className="list-disc mb-2">Au stud bumping (wafer or die)</li>
          <li className="list-disc mb-2">Plastic and ceramic substrates </li>
          <li className="list-disc mb-2">Precision underfill dispensing </li>
        </ul>
      </>
    ),
  },
  {
    title: "Custom Packaging & Assembly",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2">Multi-chip modules </li>
          <li className="list-disc mb-2">Thermo-compression bonding </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">
              Die-to-die, wafer-to-wafer, and die-to-wafer
            </li>
          </ul>
          <li className="list-disc mb-2">MEMs packaging and assembly</li>
          <li className="list-disc mb-2">
            Packaging and assembly process development
          </li>{" "}
          <li className="list-disc mb-2">RF assembly</li>
          <li className="list-disc mb-2">Mechanical Assembly</li>
          <li className="list-disc mb-2">Optoelectronic assembly</li>
          <li className="list-disc mb-2">Flex circuit assembly</li>
          <li className="list-disc mb-2">Surface mount</li>
          <li className="list-disc mb-2">Rework and repackaging</li>
        </ul>
      </>
    ),
  },
  {
    title: "Testing/Characterization/Inspection",
    content: (
      <>
        <ul className="ml-5">
          <li className="list-disc mb-2 ">3-D X-Ray Tomography </li>
          <li className="list-disc mb-2 ">Scanning Acoustic Microscopy </li>
          <li className="list-disc mb-2 ">White Light Interferometry </li>
          <li className="list-disc mb-2 ">
            Gross and Fine Leak Testing of Hermetic Packages{" "}
          </li>

          <li className="list-disc mb-2"> Mil-Std Inspection</li>
        </ul>
      </>
    ),
  },
];

const Page = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="pt-[120px] lg:pt-[150px] ">
      <div className="w-11/12 mx-auto">
        <div className="text-left mb-[40px] mt-[100px]">
          <p className="lg:text-[64px] text-3xl font-bold text-[#000000] lg:leading-[54px] mb-5">
            IC Packaging
          </p>
          <p className="lg:text-2xl text-base font-normal">
            Discover our expertise in PCB Design.
          </p>
          <p className="lg:text-xl text-lg font-normal my-[35px]">
            Protronics Packaging services include microelectronics and optics
            assembly and packaging. Our prototyping Foundry uses methods ranging
            from 2D die attach and wire bond assembly to multiple 2.5D and 3D
            integration schemes. Our wirebonding capabilities include manual and
            automated wedge and ball wirebonders and pull testers. Our 2.5D
            packaging platforms include large-format interposers for
            integration. Our 3D integration technologies range from die stacking
            and flip-chip bump bonding to advanced integration technologies
            utilizing through-silicon vias or wafer bonding with high-density,
            low-capacitance interconnects. Performance needs, form factor,
            security, and cost all play a role in deciding which approach to
            use.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className=" w-full">
            <Image
              src="/images/ic-packaging.png"
              className="rounded-2xl"
              width={1300}
              height={545}
              alt="product image"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-[100px]">
        <div className="w-11/12 mx-auto">
          <div id="accordion-collapse" data-accordion="collapse">
            {accordionData.map((item, index) => (
              <div key={index} className="mb-5">
                <h2
                  className="text-lg lg:text-xl"
                  id={`accordion-collapse-heading-${index}`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-proDark border h-[80px] border-[#E4E7EC] gap-3 rounded-t-[10px]  focus:bg-[#C6DDF7]"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openItem === index}
                    aria-controls={`accordion-collapse-body-${index}`}
                  >
                    <span>{item.title}</span>
                    <IoIosArrowUp
                      className={`text-[#F56630]  ${
                        openItem === index ? "rotate-180" : ""
                      } shrink-0`}
                    />
                  </button>
                </h2>
                <div
                  id={`accordion-collapse-body-${index}`}
                  className={`${openItem === index ? "" : "hidden"}`}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div className="p-5 text-sm lg:text-lg  border border-t-0 border-gray-200 bg-[#E3EFFC] rounded-b-[10px] text-[#001633]">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default Page;
