'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroImageCarousel = () => {
  const images = [
    '/heroimagelooping/hero section image.png',
    '/heroimagelooping/about image.png',
    '/heroimagelooping/herosectionimageslide.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= images.length) return 0;
      if (nextIndex < 0) return images.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={1}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 40 },
            opacity: { duration: 0 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          alt="HVAC Service"
          className="absolute inset-0 w-full h-full object-contain object-center hover:scale-105 transition-transform duration-700 cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
};

export default HeroImageCarousel;