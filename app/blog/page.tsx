import HeaderBar from "@/components/common/HeaderBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const categories = [
    "PCB Prototype",
    "Layering Techniques",
    "Manufacturing",
    "RFQ Process ",
    "Maintenance Policy",
    "Control and Quality",
  ];
  return (
    <section className="pt-[200px]">
      <div className="w-11/12 mx-auto">
        <HeaderBar
          title="Our Blog"
          subtitle="There's a story behind every wonderful adventure."
        />
        <div className="my-20">
          <div className="flex lg:flex-row flex-col-reverse gap-6">
            <div className="lg:w-3/4 w-full">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                {blogs.map((blog) => (
                  <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <div>
                      <div>
                        <div className="image-box h-[240px] relative z-10">
                          <Image
                            src="/images/pcb-logos/pcb-xray.svg"
                            className=" object-contain object-center rounded-[10px]"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            alt="product image"
                          />
                        </div>
                      </div>
                      <div className="my-6">
                        <p className="font-normal text-sm mb-3">
                          March 17, 2024
                        </p>
                        <p className="text-proDark lg:text-[24px] text-lg font-medium mb-4">
                          Mastering PCB Layering
                        </p>
                        <p className="text-base font-normal text-proDark">
                          President Jan S. Alford brings over 29 years of
                          Manufacturing and Engineering expertise to ProTronics.
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/4 w-full  relative">
              <div className="sticky top-[160px]">
                <div className="bg-[#FFECE5] rounded-[10px] p-[26px] mb-14">
                  <p className="text-base font-normal text-proDark text-center mb-4">
                    Get beyond blog delivered to your inbox every week.{" "}
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium text-black mb-3">
                    Categories
                  </p>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        className="list-none text-sm font-normal mb-3 text-proDark"
                        key={index}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <p className="text-base font-medium text-black mb-3">
                    Popular Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <button
                        className="list-none text-xs p-3 rounded-[19px] font-normal bg-[#98a2b319]"
                        key={index}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
