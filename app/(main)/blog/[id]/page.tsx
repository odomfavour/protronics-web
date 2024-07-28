import HeaderBar from "@/components/common/HeaderBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <section className="py-10 border-black border-b">
            <div className="w-10/12 mx-auto">
              <p className="lg:text-[56px] text-3xl font-bold mb-4">
                Mastering PCB Layering
              </p>
              <p className="lg:text-2xl  text-lg font-normal">
                A beginner&apos;s guide
              </p>
            </div>
          </section>

          <div className="my-20">
            <div className="image-box h-[500px] relative">
              <Image
                src="/images/pcb-logos/pcb-xray.png"
                className=" object-contain object-center rounded-[10px]"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="product image"
              />
            </div>
            <p className="mt-5">
              The volume for PCB assembly at ProTronics depends more on the
              design of the circuit board and the number of components than the
              number of boards. We have built printed circuit boards with only
              five chip. The volume for PCB assembly at ProTronics depends more
              on the design of the circuit board and the number of components
              than the number of boards. We have built printed circuit boards
              with only five chip.
            </p>
            <div>
              <p className="mb-5">Mastering PCB Layering</p>
              <p className="mb-5">
                The volume for PCB assembly at ProTronics depends more on the
                design of the circuit board and the number of components than
                the number of boards. We have built printed circuit boards with
                only five chip. The volume for PCB assembly at ProTronics
                depends more on the design of the circuit board and the number
                of components than the number of boards. We have built printed
                circuit boards with only five chip.
              </p>

              <p className="mb-5">
                The volume for PCB assembly at ProTronics depends more on the
                design of the circuit board and the number of components than
                the number of boards. We have built printed circuit boards with
                only five chip. The volume for PCB assembly at ProTronics
                depends more on the design of the circuit board and the number
                of components than the number of boards. We have built printed
                circuit boards with only five chip.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-5">
              <div className="image-box h-[287px] relative">
                <Image
                  src="/images/pcb-logos/pcb-xray.png"
                  className=" object-contain object-center rounded-[10px]"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="product image"
                />
              </div>
              <div className="image-box h-[287px] relative">
                <Image
                  src="/images/pcb-logos/pcb-xray.png"
                  className=" object-contain object-center rounded-[10px]"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="product image"
                />
              </div>
            </div>
            <div>
              <p className="mb-5">Mastering PCB Layering</p>
              <p className="mb-5">
                The volume for PCB assembly at ProTronics depends more on the
                design of the circuit board and the number of components than
                the number of boards. We have built printed circuit boards with
                only five chip. The volume for PCB assembly at ProTronics
                depends more on the design of the circuit board and the number
                of components than the number of boards. We have built printed
                circuit boards with only five chip.
              </p>

              <p className="mb-5">
                The volume for PCB assembly at ProTronics depends more on the
                design of the circuit board and the number of components than
                the number of boards. We have built printed circuit boards with
                only five chip. The volume for PCB assembly at ProTronics
                depends more on the design of the circuit board and the number
                of components than the number of boards. We have built printed
                circuit boards with only five chip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
