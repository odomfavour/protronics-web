import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="bg-[#E3EFFC] flex flex-col items-center py-[65px]">
      <div>
        <h1 className="text-proDark text-center text-[44px] lg:text-[64px] font-bold">
          Ready to Get Started?
        </h1>

        <div className="flex items-center gap-[16px] justify-center my-[16px]">
          <div className="flex gap-1 items-center text-proDark text-sm  font-medium lg:text-base ">
            <Image
              src="/images/svg/phone-icon.svg"
              alt="phone icon"
              width={16}
              height={16}
            />
            <p>+1 2345 56768</p>
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src="/images/svg/email-icon.svg"
              alt="email icon"
              width={16}
              height={16}
            />
            <p>sales@protronics-inc.com</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/quote"
            className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
