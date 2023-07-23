import React, { useState, useEffect } from "react";
import "../CSS/BackgroundCarousel.css";
import img1 from "../Images/Background1.png";
import img2 from "../Images/Background2.png";
import img3 from "../Images/Background3.png";
import img4 from "../Images/Background4.png";

const images = [img1, img2, img3, img4];

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsZoomed(false);
      }, 5000); // Delay for 5 seconds before changing to the next image
    }, 6000); // Start zooming in 6 seconds before changing to the next image

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImageStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
    maxHeight: "100vh",
    animation: isZoomed ? "zoomIn 6s ease-in" : "none", // Adjust the zoom duration here (4s)
  };

  return (
    <div className="imageContainer positioning">
      <div style={currentImageStyle} className="positioning"></div>
    </div>
  );
};

export default BackgroundCarousel;
