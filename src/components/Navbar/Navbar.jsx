"use client";

import React from "react";
import { StockIcon } from "@/components/svgs";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const Navbar = ({navList = []}) => {

  const currentPath = usePathname();

  return (
    <header>
      <nav className="flex flex-row justify-between items-center x-margin pt-8">

        <StockIcon fill="black" aria-label="Company Logo" classes="w-20"/>

        <ul className="flex flex-row gap-8 font-medium text-lg">

        {navList.map((nav, index) => (
            <li key={index}>
              <a href={nav.url} className={`pb-3 px-5 border-b-gray-500
                ${currentPath === nav.url ? "" : " hover:text-gray-500 hover:border-b-[1px] hover:transition"}`}>
                {nav.text}
              </a>
            </li>
        ))}

        </ul>

        <Button text="Contact Us" flipColor={false}/>
      </nav>
    </header>
  );
};

export default Navbar;
