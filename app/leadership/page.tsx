import React from "react";
import Image from "next/image";
import HeaderBar from "@/components/common/HeaderBar";

const Page: React.FC = () => {
  const teamMembers = [
    {
      name: "Jan S. Alford",
      title: "President, Protronics",
      description: `President Jan S. Alford brings over 29 years of Manufacturing
                    and Engineering expertise to ProTronics. With 20+ years in
                    Technical Management, he specializes in Quick-turnaround PTH,
                    SMT, and FPT Prototype assemblies. Certified in MIL-STD-2000
                    Category “C” and experienced in Product Quality reporting, Jan
                    also teaches Solder Certification Classes and provides crucial
                    Engineering support.`,
    },
    {
      name: "Brenda Mabrey",
      title: "Operations, Protronics",
      description: `Brenda Mabrey brings over 31 years in Electronics Manufacturing Assembly to ProTronics. With 20+ years in Technical Management, he specializes in Quick-turnaround PTH, SMT, and FPT Prototype assemblies. Certified in MIL-STD-2000 Category “C” and experienced in Product Quality reporting, Jan also teaches Solder Certification Classes and provides crucial Engineering support.`,
    },
    // Add more team members here
  ];

  return (
    <section className="pt-[200px]">
      <div className="w-11/12 mx-auto">
        <HeaderBar
          title="Our Leadership"
          subtitle="There's a story behind every wonderful adventure."
        />

        <div className="flex md:flex-row flex-col-reverse items-center gap-10 py-10">
          <div className="lg:w-3/5 w-full">
            <p className="text-lg font-normal text-[#101928] mb-5">
              At Protronics Inc., we firmly believe that our people are the
              cornerstone of our success. While our business model is strong, it
              is the passion, commitment, and trust of our team members that
              truly set us apart from the competition. These qualities are not
              just buzzwords for us; they are the driving force behind
              everything we do.
            </p>
            <p className="text-lg font-normal text-[#101928] mb-5">
              Our corporate culture is built on a foundation of continuous
              improvement, ensuring that we always strive to deliver “best in
              class” service and unparalleled engineering support. This
              commitment to excellence has earned us a reputation for passion,
              commitment, and trust that precedes us both locally and globally.
            </p>
            <p className="text-lg font-normal text-[#101928] mb-5">
              We are committed to fostering an environment of innovation and
              service, where we do whatever it takes to support our customers’
              needs. 
            </p>
          </div>
          <div className="lg:w-2/5 w-full flex justify-end">
            <div className="relative h-[450px] w-full">
              <Image
                src="/images/story-pic.png"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: "cover" }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 w-11/12 mx-auto">
        <HeaderBar
          title="Our Team"
          subtitle="Get to know the people behind the premium services we offer."
          border={false}
        />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-[#FCB59A] p-6 rounded-[10px]"
            >
              <p className="lg:text-[24px] text-lg font-semibold">
                {member.name}
              </p>
              <p className="lg:text-lg text-base font-medium">{member.title}</p>
              <div className="mt-5">
                <p className="lg:text-lg text-base font-medium">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
