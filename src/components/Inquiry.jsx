import { GoArrowRight } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
const Inquiry = () => {
  return (
    <div className="w-[1440px] mx-auto pb-[124px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="col-span-1">
          <div className="relative">
            <div className="relative"><img src="../../images/ceo-img.png" alt="" /></div>
            
            <div className="bg-[#A5EADA4D] absolute p-6 rounded-xl md:left-[12%] sm:left-[-6%]  lg:left-[27%] bottom-0 backdrop-blur-lg w-[374px] sm:w-[100px]">
              <h3 className="sora text-[#072B4A] text-2xl font-semibold mb-2">
                Md. Shahinur Rahman
              </h3>
              <p className="sora text-[#072B4A] text-base font-normal">
                Managing Director, Mediusware Ltd
              </p>
            </div>
          </div>
          <p className="sora text-[#072B4A] text-lg font-normal mt-8">
            I'd be excited to talk with you about your projects or what you
            need.
          </p>
          <p className="sora text-[#072B4A] text-lg font-normal mt-4">
            Fill in the form or send us an email to{" "}
            <span className="text-[#007ACC] underline font-semibold">
              “info@mediusware.com”
            </span>
          </p>
          <p className="sora text-[#072B4A] font-bold text-xl mt-8">
            Talk to you in less than 24hs.
          </p>
          <div className="bg-[#F0F8FF] p-6 rounded-xl mt-8">
            <h3 className="sora text-[#072B4A] text-xl font-semibold mb-2">
              Book a call
            </h3>
            <p className="sora text-[#072B4A] text-base font-normal mb-8">
              Feel free to select a time at your convenience!
            </p>
            <a className="flex items-center gap-2 sora text-[#0C98EB] text-base font-semibold">
              Let’s Talk
              <GoArrowRight className="text-2xl"></GoArrowRight>
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#F0F8FF] p-6 rounded-xl">
            <h3 className="sora text-[#072B4A] text-2xl font-semibold mb-4">
              Got an idea? We’ve got the skills.
            </h3>
            <p className="sora text-[#072B4A] tet-base font-normal mb-8">
              Fill out our contact form and we’ll get in touch!
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Phone Number
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Company Name
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Deep details about your query
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Tell us more about your query"
                  className="h-[120px] rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-2 rounded-xl py-3 px-6 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold">
                Submit Inquiry
                <VscSend className="text-2xl"></VscSend>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
