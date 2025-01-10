import React from "react";
import { OneIcon, TwoIcon, ThreeIcon } from "@/components/svgs";

const Shelf = ({headers = [], text = []}) => {
    const divClasses = "flex flex-col items-center"
  return (
    <section className="flex flex-row justify-center text-center x-margin mt-40 full-box-shadow px-12 rounded-[50px] pb-20 bg-white">
        <div className={`${divClasses}`}>
            <OneIcon aria-label="One Symbol" classes="w-16 py-8"/>
            <h3 className="text-2xl font-medium">{headers[0]}</h3>
            <p className="pt-4 px-20">{text[0]}</p>
        </div>
        <div className={`${divClasses}`}>
            <TwoIcon aria-label="Two Symbol" classes="w-16 py-8"/>
            <h3 className="text-2xl font-medium">{headers[1]}</h3>
            <p className="pt-4 px-20">{text[1]}</p>
        </div>
        <div className={`${divClasses}`}>
            <ThreeIcon aria-label="Three Symbol" classes="w-16 py-8"/>
            <h3 className="text-2xl font-medium">{headers[2]}</h3>
            <p className="pt-4 px-20">{text[2]}</p>
        </div>
    </section>
  );
};

export default Shelf;
