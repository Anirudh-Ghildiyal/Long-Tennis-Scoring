import React from "react";
import { useLocation } from "react-router-dom";
import BackgroundCarousel from "./BackgroundCarousel";

const ConditionalBackgroundCarousel = () => {
  const location = useLocation();
  const hideBackgroundCarouselRoutes = [
    "/profile",
    "/editprofile",
    "/lifetimescore",
  ];
  const shouldShowBackgroundCarousel = !hideBackgroundCarouselRoutes.includes(
    location.pathname
  );

  return shouldShowBackgroundCarousel ? <BackgroundCarousel /> : null;
};

export default ConditionalBackgroundCarousel;
