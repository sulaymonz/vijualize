'use client';

import VizuCanvas from './VizuCanvas';

const CanvasCarousel = ({ slides, current }) => {
  return (
    <div
      className="absolute top-0 flex h-full w-full transition ease-in-out duration-[250ms]"
      style={{ transform: `translateX(-${100 * current}%)` }}
    >
      {slides.map((slide, i) => {
        const inLoadingZone = Math.abs(current - i) <= 2;
        return (
          <div key={slide.id} className="h-full aspect-[5/6]">
            {inLoadingZone ? (
              <VizuCanvas designId={slide.id} images={slide.images} />
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CanvasCarousel;
