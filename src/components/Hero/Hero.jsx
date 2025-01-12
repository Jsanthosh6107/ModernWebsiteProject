import React from "react";
import Button from "../Button/Button";

const Hero = ({heroTitle = "", heroDescription = ""}) => {
  return (
    <section className="h-[80%] sm:h-auto flex flex-col justify-center text-center x-margin px-[10%]">
        <h1 className="font-semibold text-5xl md:text-7xl mt-[15%]">{heroTitle}</h1>
        <p className="text-2xl px-[20%] mt-12">{heroDescription}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button text="Our Work" flipColor={false}/>
            <Button text="Contact Us" flipColor={true}/>
        </div>
    </section>
  );
};

export default Hero;
