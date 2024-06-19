'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../VizuCanvas';
import { HSVtoRGB } from '@/app/utils/converters';

const images = [
  {
    src: '/images/sneaker/1-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 0,
  },
  {
    src: '/images/sneaker/2-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/sneaker/3-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 1,
  },
  {
    src: '/images/sneaker/4-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
  },
  {
    src: '/images/sneaker/5-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/sneaker/6-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/sneaker/7-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/sneaker/8-static.png',
    layerType: 'normal',
  },
];

const Sneaker = ({ inLoadingZone, id, slidePosition }) => {
  const { palette } = useSelector((state) => state.landing);
  const { r, g, b } = HSVtoRGB({ h: palette[3].h, s: 5, v: 97 });
  return (
    <div className="relative h-full aspect-[5/6]">
      <div
        className="absolute h-full w-full z-[-1] transition-all ease-in-out duration-[250ms]"
        // style={{ left: `${100 * slidePosition}%` }}
      >
        <div
          className="absolute w-[500px] h-[500px] top-[50px] rounded-full left-0"
          style={{
            background: `linear-gradient(#ffffff, rgb(${r}, ${g}, ${b}))`,
          }}
        />
      </div>
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Sneaker;
