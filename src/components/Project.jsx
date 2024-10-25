import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "./Review.css";
import "../App.css"
const Project = () => {
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="rounded-xl h-[320px]"
              src="../../images/website.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              GoThruhike Website Redesign
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              Thruhike is the ultimate platform for discovering and sharing your
              favorite places and products. Our mission is to celebrate local
              business and inspire.
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="w-full h-[320px] rounded-xl"
              src="../../images/game.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              Gamezone Game Launcher
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              Game Launcher is a sleek desktop application designed exclusively
              for gamers. It offers seamless access to your favorite games,
              customizable setti
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="w-full h-[320px] rounded-xl"
              src="../../images/learn.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              Learn Here
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              LearnHere is the platform that presents all the lessons from
              Beginner to Expert Level with live and recorded classes.
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="rounded-xl h-[320px]"
              src="../../images/website.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              GoThruhike Website Redesign
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              Thruhike is the ultimate platform for discovering and sharing your
              favorite places and products. Our mission is to celebrate local
              business and inspire.
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="w-full h-[320px] rounded-xl"
              src="../../images/game.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              Gamezone Game Launcher
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              Game Launcher is a sleek desktop application designed exclusively
              for gamers. It offers seamless access to your favorite games,
              customizable setti
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#F0F8FF] w-[463px]">
          <figure>
            <img
              className="w-full h-[320px] rounded-xl"
              src="../../images/learn.jpg"
              alt=""
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title sora font-semibold text-2xl text-[#072B4A] mb-4">
              Learn Here
            </h2>
            <p className="sora font-normal text-base text-[#334155] mb-6">
              LearnHere is the platform that presents all the lessons from
              Beginner to Expert Level with live and recorded classes.
            </p>
            <div className="card-actions justify-start">
              <a className="sora font-semibold text-lg flex items-center gap-3 text-[#0C98EB]">
                View Project
                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>{" "}
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Project;
