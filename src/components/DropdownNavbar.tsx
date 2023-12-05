"use client";
import React from "react";
import { Menu } from "@mantine/core";
import Link from "next/link";

const DropdownNavbar = () => {
  return (
    <div>
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        offset={6}
        withArrow
        arrowPosition="center"
      >
        <Menu.Target>
          <button >Features</button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item style={{ width: "10rem" }} className="hover:font-bold">
            <Link href={"/jadwal-sholat"}>Jadwal Sholat</Link>
          </Menu.Item>
          <Menu.Item style={{ width: "10rem" }} className="hover:font-bold">
            <Link href={"/doa"}>Doa - Doa</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default DropdownNavbar;
