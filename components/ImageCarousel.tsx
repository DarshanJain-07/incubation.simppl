'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import classNames from 'classnames';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// --- Configuration ---
const OPTIONS: EmblaOptionsType = { loop: true }; // Enable looping

// TODO: Replace with your actual slide data
const slidesData = [
  {
    id: 1,
    text: 'Build for your website.',
    subText: 'Then share your first update, your website needs website connection',
    imageUrl: '/carousel/slide1.png', // Example path in /public/carousel/
  },
  {
    id: 2,
    text: 'Slide 2 Title',
    subText: 'Description for the second slide.',
    imageUrl: '/carousel/slide2.png',
  },
  {
    id: 3,
    text: 'Slide 3 Showcase',
    subText: 'Highlighting another feature.',
    imageUrl: '/carousel/slide3.png',
  },
  {
    id: 4,
    text: 'Feature Four',
    subText: 'Details about the fourth item.',
    imageUrl: '/carousel/slide4.png',
  },
  {
    id: 5,
    text: 'Final Slide Example',
    subText: 'Concluding the carousel showcase.',
    imageUrl: '/carousel/slide5.png',
  },
];

// --- Component ---
const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // Disable prev/next buttons if loop is false
    if (!OPTIONS.loop) {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    // Set initial button states correctly if looping
    if (OPTIONS.loop) {
        setPrevBtnDisabled(false);
        setNextBtnDisabled(false);
    }

  }, [emblaApi, onSelect]);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg h-1/3 relative flex flex-col justify-between min-h-[500px]">
      <div className="overflow-hidden w-full mb-auto" ref={emblaRef}>
        <div className="flex">
          {slidesData.map((slide) => (
            <div className="flex-[0_0_100%] min-w-0 relative text-center px-4 flex flex-col" key={slide.id}>
              {/* Image Container with Aspect Ratio */}
              <div className="relative w-full max-w-md mx-auto aspect-[4/3] mb-4"> 
                <Image
                  src={slide.imageUrl}
                  alt={slide.text}
                  fill // Use fill instead of width/height
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw" // Example sizes, adjust as needed
                  className="rounded shadow-md object-contain"
                  priority={slide.id === 1} // Prioritize first image
                />
              </div>
              {/* Text Content Container */}
              <div className="mt-auto">
                 {/* Added min-height to h3 */}
                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 min-h-[4rem] sm:min-h-[4.5rem] flex items-center justify-center">{slide.text}</h3>
                 <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto min-h-[3rem] sm:min-h-[3.5rem]">{slide.subText}</p> { /* Added min-h here too */} 
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Moved inside main container, adjusted positioning */}
      <div className="absolute top-4 right-4 bg-white/70 text-gray-700 text-xs font-medium px-2 py-1 rounded-full z-10">
        {selectedIndex + 1} / {slidesData.length}
      </div>

      {/* Navigation Buttons - Re-added */}
      <div className="flex justify-center space-x-3 z-10 mt-4 pb-2"> { /* Centered buttons below content */} 
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
          className={classNames(
            'bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition',
            { 'opacity-50 cursor-not-allowed': prevBtnDisabled }
          )}
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
          className={classNames(
            'bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition',
            { 'opacity-50 cursor-not-allowed': nextBtnDisabled }
          )}
        >
          <ArrowRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
