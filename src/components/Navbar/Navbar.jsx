import React from "react";
import { StockIcon } from "@/components/svgs";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center x-margin pt-8">

        <StockIcon fill="black" aria-label="Company Logo" classes="w-20"/>

        <ul className="flex flex-row gap-8 font-medium text-lg">
          <li>
            <a href="#" className="pb-3 px-5 border-b-gray-500">Home</a>
          </li>
          <li>
            <a href="#" className="pb-3 px-5 border-b-gray-500 hover:text-gray-500 hover:border-b-[1px] hover:transition">About</a>
          </li>
          <li>
            <a href="#" className="pb-3 px-5 border-b-gray-500 hover:text-gray-500 hover:border-b-[1px] hover:transition">Services</a>
          </li>
          <li>
            <a href="#" className="pb-3 px-5 border-b-gray-500 hover:text-gray-500 hover:border-b-[1px] hover:transition">Portfolios</a>
          </li>
          <li>
            <a href="#" className="pb-3 px-5 border-b-gray-500 hover:text-gray-500 hover:border-b-[1px] hover:transition">Clients</a>
          </li>
        </ul>

        <Button text="Contact Us" flipColor={false}/>
      </nav>
    </header>
  );
};

export default Navbar;
