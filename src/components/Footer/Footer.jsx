import React from "react";
import Button from "@/components/Button/Button";

const Footer = ({buttonText = "", callToAction = "", links = [], copyright = ""}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="py-40">
          <div className="x-margin flex flex-col justify-center text-center w-auto">
              <div className="pb-6">
                  <Button text={buttonText} flipColor={false} invert={true}/>
              </div>
              <h2 className="text-8xl font-semibold uppercase">{callToAction}</h2>
          </div>
      </div>
      <div className="pb-12">
          <div className="x-margin flex flex-row justify-between border-gray-700 border-t-[1px] pt-10">
              <div className="flex flex-wrap flex-row gap-8">
                  {links.map((link, index) => (
                      <div
                          key={index}
                      >
                          <a href={link.url} aria-label={`Link to ${link.text}`}>{link.text}</a>
                      </div>
                  ))}
              </div>
              <div>
                  <p>© {currentYear} – {copyright}</p>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
