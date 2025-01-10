import React from "react";
import Image from "next/image";

const ImageText = ({imageInfo = {}, textContent = [], inverted = true}) => {
  
  const defaultClasses = "flex-row";
  const invertedClasses = "flex-row-reverse";

  let finalClasses = inverted ? invertedClasses : defaultClasses;
  finalClasses = `${finalClasses} flex justify-center items-center x-margin my-20`;

  if (!imageInfo) {
    return null;
  }

  return (
    <section>
      <div className={`${finalClasses}`}>

        <div>
          {textContent.map((text, index) => (
            <div
              key={index}
              className={`${inverted ? "pl-16" : "pr-16"} py-3`}
            >
              <p className="text-xl">{text}</p>
            </div>
          ))}
        </div>

        {imageInfo.src && (
          <div>
            <Image 
              src={imageInfo.src}
              alt={imageInfo.alt || ""}
              width={imageInfo.width || 500} 
              height={imageInfo.height || 300}
              className="rounded-[15px]"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default ImageText;
