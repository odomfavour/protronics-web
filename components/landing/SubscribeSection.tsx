const SubscribeSection = () => {
  return (
    <div className="py-[80px]">
      <div className="w-[90%] mx-auto bg-[#F0F6FF] rounded-[32px]  p-4 lg:p-[64px]">
        <div className="lg:max-w-[527px]">
          <div>
            <h1 className="text-2xl text-center lg:text-left lg:text-[40px] lg:leading-[48px] font-semibold text-black">
              Enter your email address and get the last updates
            </h1>
            <p className="my-[16px] text-center lg:text-left text-sm lg:text-lg text-[#002966] ">
              Stay up to date with the latest information in the industry, our
              new collections, and special offers!
            </p>
          </div>
          <div>
            <form className="flex items-center gap-[8px]">
              <input
                type="email"
                placeholder="Enter Address"
                className="border border-[#D0D5DD] rounded-[8px] lg:py-[18px] py-[10px]  px-[8px] lg:px-[16px] w-full text-[#98A2B3] text-sm"
              />
              <button className="bg-proOrange rounded-[8px] lg:p-[16px] p-[10px]  font-semibold text-sm lg:text-base text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeSection;
