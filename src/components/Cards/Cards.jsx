"use client"

import Button from "../Button/Button";
import Image from "next/image";
import {React, useState, useEffect} from "react";

const Cards = ({subTitle="", title="", description="", cards=[]}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!autoPlay) return; 

        const timer = setInterval(nextSlide, 3500);
        return () => clearInterval(timer);
    }, [currentIndex]);

  return (
    <section className="bg-[url('/images/CircleBackground.png')] bg-fixed bg-cover pb-16 overflow-hidden">
        <div className="x-margin flex flex-col justify-center text-center">
            <div className="flex flex-col justify-center text-white py-12 gap-4">
                <p className="text-lg font-medium uppercase">{subTitle}</p>
                <h2 className="text-5xl font-semibold">{title}</h2>
                <p className="text-2xl px-[20%]">{description}</p>
            </div>

            <div className="flex flex-row overflow-hidden">
                {cards.map((card, slideIndex) => (
                    <div key={slideIndex} className="flex flex-row transition-transform duration-700 ease-in-out shrink-0 w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                        <div className="bg-white flex flex-row p-12 rounded-[20px]">
                            <div className="flex flex-col text-left w-[60%] gap-8">
                                <p className="text-lg font-medium uppercase">{card.cardSubtitle}</p>
                                <h3 className="text-5xl font-medium">{card.cardTitle}</h3>
                                <p className="text-xl">{card.cardDescription}</p>
                                    <div className="flex flex-row text-left">
                                        {card.cardStatistics.map((cardStatistic, statIndex) => (
                                            <div 
                                                key={statIndex} 
                                                className={`min-w-[150px] ${statIndex === 0 ? "" : "border-l-gray-500 border-l pl-3 ml-3"}`}>
                                                <h3 className="text-5xl font-medium">{cardStatistic.cardNumber}</h3>
                                                <p>{cardStatistic.cardNumberText}</p>
                                            </div>
                                        ))}
                                    </div>
                                <div>
                                    <Button text={card.cardButton} flipColor={false} invert={false} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[40%]">
                                {card.imageInfo.src && (
                                    <div>
                                        <Image 
                                        src={card.imageInfo.src}
                                        alt={card.imageInfo.alt || ""}
                                        width={card.imageInfo.width || 500} 
                                        height={card.imageInfo.height || 300}
                                        className="rounded-[15px]"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row items-center justify-center my-6">
                {cards.map((_, index) => (
                    <span key={index}
                        onClick={() => {
                            goToSlide(index);
                            setAutoPlay(!autoPlay);
                        }}
                        className={`rounded-full mx-2 bg-white ${index === currentIndex ? "w-3 h-3" : "w-2 h-2"} hover:cursor-pointer`}>
                    </span>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Cards;
