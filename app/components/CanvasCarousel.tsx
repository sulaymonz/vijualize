import Puffy from './Designs/Puffy';
import Sneaker from './Designs/Sneaker';
import Vibes from './Designs/Vibes';
import Snowborder from './Designs/Snowboarder';

const designs = {
  Puffy: Puffy,
  Sneaker: Sneaker,
  Vibes: Vibes,
  Snowboarder: Snowborder,
};

const CanvasCarousel = ({ slides, current }) => {
  return (
    <div
      className="absolute top-0 flex h-full w-full transition ease-in-out duration-[250ms]"
      style={{ transform: `translateX(-${100 * current}%)` }}
    >
      {slides.map((slide, i) => {
        const Design = designs[slide.name];
        const inLoadingZone = Math.abs(current - i) <= 2;
        const slidePosition = Math.sign(i - current);

        return (
          <Design
            key={slide.id}
            inLoadingZone={inLoadingZone}
            id={slide.id}
            slidePosition={slidePosition}
          />
        );
      })}
    </div>
  );
};

export default CanvasCarousel;
