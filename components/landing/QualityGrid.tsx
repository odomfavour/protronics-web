import Image from "next/image";
import React from "react";

const QualityGrid = () => {
  const pcbs = [
    {
      id: 1,
      name: "IPC-A-610 Class 2 and 3",
      img: "/images/pcb-logos/ipc.svg",
    },
    {
      id: 2,
      name: "Surface Mount Technology Association",
      img: "/images/pcb-logos/smta.svg",
    },
    {
      id: 3,
      name: "Just-In-Time Management (JIT)",
      img: "/images/pcb-logos/iso.svg",
    },
    {
      id: 4,
      name: "International Traffic in Arms Regulation",
      img: "/images/pcb-logos/it.svg",
    },
    {
      id: 5,
      name: "Restriction of Hazardous Substance (RoHS)",
      img: "/images/pcb-logos/rohs.svg",
    },
    {
      id: 6,
      name: "ISO 9000 Preparation",
      img: "/images/pcb-logos/iso.svg",
    },
  ];
  return (
    <div className="py-10">
      <div className="lg:w-2/3 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
          {pcbs.map((pcb) => {
            return (
              <div
                className="bg-white border py-4 px-7 rounded-[10px]"
                key={pcb.id}
              >
                <div className="relative h-[37px] w-[74px]">
                  <Image
                    src={pcb.img}
                    className=" object-contain object-center rounded-2xl "
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="product image"
                  />
                </div>
                <p className="text-proDark font-semibold text-lg mt-2">
                  {pcb.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QualityGrid;
