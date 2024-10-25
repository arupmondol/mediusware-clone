import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../App.css"
const Review = () => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F0F8FF]">
      <div className="w-[1440px] mx-auto py-[124px]">
        <h3 className="text-center sora font-semibold text-5xl text-[#072B4A] mb-6">
          What the People <span className="text-[#2EB8A2]">Are Saying</span>{" "}
        </h3>
        <p className="text-center sora text-[#334155] text-lg font-normal mb-16">
          Explore success stories from clients across a range of industries,
          spanning from techpreneurs and start- <br />
          ups to established enterprises.
        </p>
        {/* slider */}
        <div className="slider-container">
          <Slider {...settings}>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider1.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Mediusware renewed our trust in outsourcing IT development in
                the USA.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Jenny Wilson
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                CEO, Company Name
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider2.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Banking the unbanked with the help of Mediusware developers.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Courtney Henry
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                CTO, Company Name
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider3.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Our Digital Transformation Journey Fueled by Top-Tier IT
                Solutions by Mediusware Ltd.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Kristin Watson
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                Director, Company Name
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider1.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Mediusware renewed our trust in outsourcing IT development in
                the USA.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Jenny Wilson
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                CEO, Company Name
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider2.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Banking the unbanked with the help of Mediusware developers.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Courtney Henry
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                CTO, Company Name
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className=" relative">
                <img
                  className="rounded-xl"
                  src="../../images/slider3.jpg"
                  alt=""
                />
                <img
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12"
                  src="../../images/play.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 sora font-medium text-lg text-[#072B4A]">
                Our Digital Transformation Journey Fueled by Top-Tier IT
                Solutions by Mediusware Ltd.
              </h3>
              <p className="mt-4 sora font-medium text-base text-[#1E293B]">
                Kristin Watson
              </p>
              <p className="mt-1 sora font-normal text-sm text-[#475569]">
                Director, Company Name
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
