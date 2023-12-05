import React from "react";
import Image from "next/image";
import Link from "next/link";
import CalenderIcon from "../../public/asset/calender-icon.svg";
import Doa from "../../public/asset/doa-icon.svg";

const CardFeatures = () => {
  return (
    <div className="w-[85%] h-32 py-3 px-5 rounded-xl bg-white shadow-lg font-lora flex flex-row gap-3 justify-center">
      {/* Jadwal SHolat */}
      <Link href={"/jadwal-sholat"}>
        <div
          className="item py-2 px-3 w-22 h-full shadow-xl bg-white rounded-lg grid cursor-pointer"
          style={{ gridTemplateRows: "2fr 1fr" }}
        >
          <div className="gambar flex justify-center items-center">
            <Image src={CalenderIcon} alt="" width={"50"} height={"50"} />
          </div>
          <div className="title text-xs font-bold flex justify-center items-">
            Jadwal Sholat
          </div>
        </div>
      </Link>

      {/* Doa */}
      <Link href={"/doa"}>
        <div
          className="item py-2 px-3 w-22 h-full shadow-xl bg-white rounded-lg grid cursor-pointer"
          style={{ gridTemplateRows: "2fr 1fr" }}
        >
          <div className="gambar flex justify-center items-center">
            <Image src={Doa} alt="" width={"40"} height={"50"} />
          </div>
          <div className="title text-xs font-bold flex justify-center items-center">
            Doa - Doa
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardFeatures;
