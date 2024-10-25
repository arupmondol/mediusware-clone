const Work = () => {
  return (
    <div className="w-[1440px] mx-auto py-[124px]">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2">
          <h3 className="sora text-[#072B4A] text-[48px] font-semibold mb-4">
            How We <span className="text-[#2EB8A2]">Work Togeother</span>
          </h3>
          <p className="sora text-[#334155] text-lg font-normal ">
            Mediusware is a US-based software development company with unique
            access to premium developers & Designers. We follow a structured
            process to ensure project success. Our approach guarantees
            reliability and ongoing support for every project. Here is the
            process we work on:
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/planning.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Planning
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Collaborate with clients to create a detailed project plan.
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/defining.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Defining
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Document project requirements and specifications.
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/designing.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Designing
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Develop and refine user-friendly prototypes and wireframes.
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/coding.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Coding & Implement
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Develop the software using best practices and latest technologies.
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/testing.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Testing
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Rigorously test for functionality, performance, and security.
          </p>
        </div>
        <div className="col-span-1 bg-[#F1F5F9] p-6 rounded-xl">
          <img src="../../images/integration.png" alt="" />
          <h3 className="sora text-2xl font-semibold text-[#072B4A] mt-[46px]">
            Integration
          </h3>
          <p className="sora text-base font-normal text-[#072B4A] mt-3">
            Integrate components, conduct final testing, and provide support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
