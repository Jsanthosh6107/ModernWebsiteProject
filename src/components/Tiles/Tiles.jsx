import React from "react";

const Tiles = ({tilesHeader = "", tilesTitle = "", tiles = []}) => {
  return (
    <section className="x-margin my-20">
        <div className="flex flex-col justify-center text-center px-[10%] pb-12">
            <p className="text-xl font-medium">{tilesHeader}</p>
            <h2 className="font-semibold text-5xl px-12 pt-4">{tilesTitle}</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-6">
            {tiles.map((tile, index) => (
                <div
                    key={index}
                    className="w-[30%] border border-gray-400 rounded-[25px] p-8"
                >
                    <div className="flex flex-row items-center gap-6 pb-4">
                        <div className="w-16">{tile.svg}</div>
                        <h3 className="font-medium text-2xl">{tile.title}</h3>
                    </div>
                    <p>{tile.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Tiles;
