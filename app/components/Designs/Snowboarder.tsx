'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../VizuCanvas';
import { HSVtoRGB } from '@/app/utils/converters';

const images = [
  {
    src: '/images/snowborder/1-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 0,
  },
  {
    src: '/images/snowborder/2-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 1,
  },
  {
    src: '/images/snowborder/3-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
  },
  {
    src: '/images/snowborder/4-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/snowborder/5-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/snowborder/6-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/snowborder/7-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/snowborder/8-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/snowborder/9-static.png',
    layerType: 'normal',
  },
];

const Snowborder = ({ inLoadingZone, id, slidePosition }) => {
  const { palette } = useSelector((state) => state.landing);
  const { r, g, b } = HSVtoRGB({ h: palette[2].h, s: 5, v: 97 });
  return (
    <div className="relative h-full aspect-[5/6]">
      <div
        className="absolute h-full w-full z-[-1] transition-all ease-in-out duration-[250ms]"
        // style={{ left: `${100 * slidePosition}%` }}
      >
        <div
          className="absolute w-[80%] h-[85%] bottom-0 left-[10%] border"
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <div className="absolute bottom-[115px] right-[87px] text-xs font-serif font-black">
          ス<br />ノ<br />ー<br />ボ<br />ー<br />ダ<br />ー
        </div>
        <div className="absolute w-full text-center border-b-2 bottom-[30px] left-0 text-8xl font-sans font-black ">
          KNARLEY
        </div>
      </div>
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Snowborder;
