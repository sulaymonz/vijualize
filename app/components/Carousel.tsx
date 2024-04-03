'use client';

const Carousel = ({ slides, current }) => {
  return (
    <div
      className="absolute top-0 flex h-full w-full transition ease-in-out duration-[250ms]"
      style={{ transform: `translateX(-${100 * current}%)` }}
    >
      {slides.map((slide, i) => {
        const inLoadingZone = Math.abs(current - i) <= 2;
        const node = (
          <div
            key={slide.src}
            className="h-full aspect-[5/6] bg-center bg-contain bg-no-repeat"
            suppressHydrationWarning
            style={
              inLoadingZone || slide.imageLoaded
                ? {
                    backgroundImage: `url("/images/design_samples/${slide.src}")`,
                  }
                : {}
            }
          />
        );
        if (inLoadingZone) {
          slide.imageLoaded = true;
        }
        return node;
      })}
    </div>
  );
};

export default Carousel;
