"use client";

import React, { useRef, useState, useEffect } from "react";

const SlideIn = ({ children, delay = 0, flip = false, classes = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef(null);
  const flipTranslate = flip ? "translateY(-50px)" : "translateY(200px)";

  useEffect(() => {
    // Determine the threshold based on screen size
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const threshold = isMobile ? 0 : 0; // Reduced threshold for mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []); // Only runs on mount

  return (
    <div
      style={{
        transition: `all 0.6s ease ${delay}ms`,
        transform: isVisible ? "translateY(0)" : flipTranslate,
        opacity: isVisible ? 1 : 0,
      }}
      ref={myRef}
      className={classes}
    >
      {children}
    </div>
  );
};

export default SlideIn;
