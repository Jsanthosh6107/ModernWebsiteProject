import React from "react";
import Button from "@/components/Button/Button";

const ImageTextTwo = ({ITTitle = "", ITSubTitle = "", Image, Title = "", Description = "", ButtonText = ""}) => {
  return (
    <section className="flex flex-col justify-center text-center x-margin my-20">
        <div className="px-[10%]">
            <h2 className="font-semibold text-5xl mt-[10%]">{ITTitle}</h2>
            <p className="text-2xl mt-4">{ITSubTitle}</p>
        </div>

        <div className="flex flex-row items-center pt-8">
            <div className="w-[50%] flex justify-center">
                <div className="w-[50%] ">{Image}</div>
            </div>
            <div className="w-[50%] flex flex-col text-left items-start gap-8">
                <h2 className="text-4xl font-medium pr-[20%]">{Title}</h2>
                <p className="text-lg">{Description}</p>
                <Button text={ButtonText} flipColor={false} />
            </div>
        </div>
    </section>
  );
};

export default ImageTextTwo;
