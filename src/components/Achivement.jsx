const Achivement = () => {
  return (
    <div className="bg-[#F0F8FF]">
      <div className="w-[1440px] mx-auto py-[124px]">
        <h3 className="text-center sora font-semibold text-5xl text-[#072B4A] mb-6">
          Achievements <span className="text-[#2EB8A2]">& Awards</span>{" "}
        </h3>
        <p className="text-center sora text-[#334155] text-lg font-normal mb-16">
          People know us for our top-notch work and great customer service, all
          of whom have expressed nothing <br /> but positive feedback about our
          services. Take a moment to see for yourself.
        </p>
        <div className="grid grid-cols-4 gap-6">
          <img className="rounded-lg" src="../../images/clutch.jpg" alt="" />
          <img className="rounded-lg" src="../../images/upwork.jpg" alt="" />
          <img className="rounded-lg" src="../../images/google.jpg" alt="" />
          <img className="rounded-lg" src="../../images/swd.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achivement;
