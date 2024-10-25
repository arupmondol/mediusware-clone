const Newsletter = () => {
  return (
    <div className="w-[1440px] mx-auto my-[124px] ">
      <div className=" bg-[#072B4A] rounded-xl p-16 flex justify-between items-center">
        <div>
          <h3 className="sora text-white text-3xl font-semibold mb-2">
            Want to know what we are up to?
          </h3>
          <p className="sora text-white text-lg font-normal ">
            Subscribe to our newsletter.
          </p>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="mr-4 rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
          />
          <button className="rounded-xl py-3 px-6 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
