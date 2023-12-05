"use client";
import React from "react";
import Link from "next/link";
import DropdownNavbar from "./DropdownNavbar";

const navbar = () => {
  return (
    <div className="px-10 py-3 flex flex-row justify-between border-b border-black bg-white w-full">
      <div className="logo">
        <Link href={"/"}>
          <span className="text-2xl font-lora font-bold cursor-pointer">
            Garix Jadwal Sholat
          </span>
        </Link>
      </div>
      <div className="menu">
        <ul className="flex flex-row gap-10 font-libre">
          <div className="hover:font-bold">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="hover:font-bold">
            <DropdownNavbar />
          </div>
          <div className="hover:font-bold">
            <Link href={"#"}>Contact Us</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
