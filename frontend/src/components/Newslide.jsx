import React, { useState, useEffect } from "react";

const Newslide = () => {
  // Array of images (replace these URLs with your own image URLs)
  const images = ["/images/banner.jpg", "/images/banner2.jpg"];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds using useEffect
  useEffect(() => {
    // Set up an interval to automatically switch images
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "100%",

        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Display the current image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "100%" }}
      />
      {/* Optional: Add slide indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-20%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: currentIndex === index ? "#fff" : "#888",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Newslide;
