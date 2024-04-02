'use client';

const Carousel = ({ slides, current }) => {
  return (
    <div
      className="absolute top-0 flex h-full w-full transition ease-in-out duration-[250ms]"
      style={{ transform: `translateX(-${100 * current}%)` }}
    >
      {slides.map((slide) => (
        <div
          key={slide.src}
          className="h-full aspect-[5/6] bg-center bg-contain bg-no-repeat"
          suppressHydrationWarning
          style={{
            backgroundImage: `url("/images/design_samples/${slide.src}")`,
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
