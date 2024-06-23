'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../../VizuCanvas';
import { HSVtoRGB } from '@/app/utils/converters';
import Barcode from './Barcode';

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
          className="absolute w-[400px] h-[400px] top-[90px] rounded-full left-[50px]"
          style={{
            background: `linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgba(${r}, ${g}, ${b}, 0.3))`,
            // background: `rgb(${r}, ${g}, ${b})`,
          }}
        />
      </div>
      <div className="absolute w-[80%] h-[10%] top-[20%] left-[10%] flex flex-row font-mono">
        <div className="w-[195px] p-[10px] leading-none flex flex-col justify-end border-r">
          <div className="text-xs leading-none pb-1">
            #<br />
            03
            <br />
            SNEAKER_
          </div>
        </div>
        <div className="flex flex-col justify-end font-sans">
          <div className="text-[7px] p-[10px] leading-none">
            The future isn't coming — it's already here. Slip into these shoes
            and experience tomorrow while you're living for today. An evolution
            of the acclaimed '80s runner, these sneakers have an upper as airy
            as it is futuristic. Overlays lend a cyberpunk vibe, while the
            outsole stays confidently ahead of its time. Yet for all their
            forward-thinking style, these shoes keep comfort close.
          </div>
        </div>
      </div>
      <div className="absolute w-full flex justify-center top-[73%]">
        <Barcode
          className="absolute w-[20%] h-auto"
          rgb={{ r: r, g: g, b: b }}
        />
      </div>
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Sneaker;
