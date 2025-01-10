import React from "react";
import Image from "next/image";

const CompanyGallery = ({ images = [] }) => {
  return (
    <section className="flex flex-row justify-center x-margin my-20">
        {images.map((image, index) => (
            <div
                key={index}
                className="relative w-full max-w-[300px] h-64 m-12 flex items-center p-0 xl:p-10 grayscale opacity-70 hover:opacity-100 hover:transition"
            >
                <Image 
                    src={image.src}
                    alt={image.alt || "Gallery Image"}
                    layout="intrinsic"
                    width={image.width || 500} 
                    height={image.height || 300}
                />
            </div>
        ))}
    </section>
  );
};

export default CompanyGallery;
