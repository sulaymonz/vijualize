'use client';

import { useState } from 'react';
import Carousel from '../components/Carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function carouselPage() {
  const [curSlide, setCurSlide] = useState(0);

  const slides = [
    { src: 'posters/Untitled_Artwork-1.png' },
    { src: 'posters/Untitled_Artwork-2.png' },
    { src: 'posters/Untitled_Artwork-3.png' },
    { src: 'posters/Untitled_Artwork-4.png' },
    { src: 'posters/Untitled_Artwork-5.png' },
    { src: 'posters/Untitled_Artwork-6.png' },
    { src: 'posters/Untitled_Artwork-7.png' },
    { src: 'posters/Untitled_Artwork-8.png' },
    { src: 'posters/Untitled_Artwork-9.png' },
    { src: 'posters/Untitled_Artwork-10.png' },
    { src: 'posters/Untitled_Artwork-11.png' },
    { src: 'posters/Untitled_Artwork-12.png' },
    { src: 'posters/Untitled_Artwork-13.png' },
    { src: 'posters/Untitled_Artwork-14.png' },
    { src: 'posters/Untitled_Artwork-15.png' },
    { src: 'posters/Untitled_Artwork-16.png' },
    { src: 'posters/Untitled_Artwork-17.png' },
  ];

  const nextSlide = () => {
    setCurSlide(curSlide < slides.length - 1 ? curSlide + 1 : curSlide);
  };

  const prevSlide = () => {
    setCurSlide(curSlide > 0 ? curSlide - 1 : curSlide);
  };

  return (
    <div className="container mx-auto pb-20">
      <div className="flex justify-center items-center">
        <button className="cursor-pointer" onClick={prevSlide}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </button>
        <div className="w-[500px] h-[600px] overflow-hidden relative">
          <Carousel slides={slides} current={curSlide} />
        </div>
        <button className="cursor-pointer" onClick={nextSlide}>
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
