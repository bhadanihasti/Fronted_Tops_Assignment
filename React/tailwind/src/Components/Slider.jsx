import React, { useState, useEffect } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdkLStJlpaX5B81VSbez8haaj7lMiGRCKqQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdkLStJlpaX5B81VSbez8haaj7lMiGRCKqQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdkLStJlpaX5B81VSbez8haaj7lMiGRCKqQ&s",
];

function Slider() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <img
        src={images[index]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
      >
        ❯
      </button>
    </div>
  );
}

export default Slider;
