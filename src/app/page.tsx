import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardFeatures from "@/components/CardFeatures";

const home = () => {
  return (
    <div>
      <div className="nav fixed  top-0 z-10 w-full">
        <Navbar />
      </div>

      <div className="heros">
        <Hero />
      </div>

      <div className="card-features absolute top-[90%] flex justify-center w-full ">
        <CardFeatures />
      </div>

      <div className="caption-doa h-[500px] bg-gray-100 py-20 px-10 border border-black">
        Doa - Doa
      </div>

      <div className="body h-[1000px]">asdasdasd</div>
    </div>
  );
};

export default home;
