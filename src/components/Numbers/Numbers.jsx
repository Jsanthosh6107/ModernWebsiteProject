import React from "react";
const Numbers = ({numbersList = []}) => {
  return (
    <section className="bg-gray-200 mt-20">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center text-center x-margin justify-evenly py-20 gap-16 md:gap-8 lg:gap-0">
            {numbersList.map((number, index) => (
                <div
                    key={index}
                >
                    <h2 className="text-7xl font-semibold">{number.topString}</h2>
                    <p className="text-2xl font-medium">{number.bottomString}</p>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Numbers;
