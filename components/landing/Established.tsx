import Image from "next/image";
import Link from "next/link";

const Established = () => {
  return (
    <div className="relative px-5">
      <div className="absolute left-0 bottom-0">
        <Image
          src="/images/subtle-bg-left.png"
          alt="subtle-bg"
          className="w-full h-[318px] hidden lg:block"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/images/subtle-bg-right.png"
          className="w-full h-[318px] hidden lg:block"
          alt="subtle-bg"
          width={500}
          height={500}
        />
      </div>
      <div className="max-w-[1052px] mx-auto flex flex-col items-center pt-[120px] pb-[81px] bg-white">
        <h1 className="text-center lg:leading-[64px] text-[#000000] font-bold text-3xl lg:text-[64px]">
          We have been delivering quality and quick turnaround projects for our
          customers since
        </h1>

        <div className="my-5">
          <Image
            src={"/images/yearImg.png"}
            alt="year image"
            width={303}
            height={127}
            className="w-full lg:w-[300px]"
          />
        </div>

        <p className="text-[#101928] max-w-[594px] leading-normal lg:leading-[38px] text-center font-bold text-lg lg:text-[32px] mb-5">
          Contact us to discuss your Printed Circuit Board project
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Established;
