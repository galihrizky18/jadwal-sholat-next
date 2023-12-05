import React from "react";

const Hero = () => {
  const quote =
    '"Jika Engkau Menemukan Hatimu Merasa Gelisah, Carilah Ketenangan dalam Sujudmu"';

  return (
    <div>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(http://localhost:3000/asset/mosque.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 text-white "></div>
        <div className="hero-content text-center text-neutral-content w-full ">
          <div className=" text-white ">
            <h1 className="mb-5 text-2xl font-bold w-full font-libre">
              {quote}
            </h1>
            <p className="mb-5 font-lora">- Imam Ali-Alghazali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
