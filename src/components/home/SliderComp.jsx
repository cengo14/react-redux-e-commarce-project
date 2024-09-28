import React from "react";
import Slider from "react-slick";
import galatasaray from "../../assets/galatasaray.png";
import nike2 from "../../assets/nike1.png";
import iphone from "../../assets/iphone.png";
import outdoor from "../../assets/outdoor.png";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-amber-500 px-6 py-2">
          <div>
            <h1 className="text-6xl font-bold">
              New spirit, New Victories...{" "}
            </h1>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolore voluptas architecto quidem. Aliquid quos consequatur.
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-16 flex justify-center items-center bg-white hover:bg-gray-300 hover:scale-110 transition-all">
              İncele
            </div>
          </div>
          <img className="w-[400px] h-[400px]" src={galatasaray} alt="" />
        </div>
        <div className="!flex items-center bg-gray-100 px-6 py-2">
          <div>
            <h1 className="text-6xl font-bold">
              Break the Boundaries, Start Running!
            </h1>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolore voluptas architecto quidem. Aliquid quos consequatur.
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-16 flex justify-center items-center bg-white hover:bg-gray-300 hover:scale-110 transition-all">
              İncele
            </div>
          </div>
          <img className="w-[400px] h-[400px]" src={nike2} alt="" />
        </div>
        <div className="!flex items-center bg-black px-6 py-2">
          <div className="text-gray-100">
            <h1 className="text-6xl font-bold">The Futures is in Your hands</h1>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolore voluptas architecto quidem. Aliquid quos consequatur.
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-16 flex justify-center items-center bg-white hover:bg-gray-300 hover:scale-110 transition-all text-black">
              İncele
            </div>
          </div>
          <img className="w-[400px] h-[400px]" src={iphone} alt="" />
        </div>
        <div className="!flex items-center bg-red-400 px-6 py-2">
          <div>
            <h1 className="text-6xl font-bold">
              Reach the Top With Every Step
            </h1>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolore voluptas architecto quidem. Aliquid quos consequatur.
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-16 flex justify-center items-center bg-white hover:bg-gray-300 hover:scale-110 transition-all">
              İncele
            </div>
          </div>
          <img className="w-[400px] h-[400px]" src={outdoor} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
