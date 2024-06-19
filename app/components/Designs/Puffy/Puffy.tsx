'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../../VizuCanvas';
import Barcode from './Barcode';
import { HSVtoRGB } from '@/app/utils/converters';

const images = [
  {
    src: '/images/puffy/1-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/2-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 0,
  },
  {
    src: '/images/puffy/3-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 1,
  },
  {
    src: '/images/puffy/4-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/puffy/5-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/puffy/6-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
    colorCorrection: 'lighter',
  },
  {
    src: '/images/puffy/7-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
    colorCorrection: 'darker',
  },
  {
    src: '/images/puffy/8-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/puffy/9-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/10-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/11-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/puffy/12-static.png',
    layerType: 'normal',
  },
];

const Puffy = ({ inLoadingZone, id, slidePosition }) => {
  const { palette } = useSelector((state) => state.landing);
  const { r, g, b } = HSVtoRGB({ h: palette[2].h, s: 5, v: 97 });
  return (
    <div className="relative h-full aspect-[5/6]">
      <div
        className="absolute h-full w-full z-[-1] transition-all ease-in-out duration-[250ms]"
        // style={{ left: `${100 * slidePosition}%` }}
      >
        <div
          className="absolute w-[90%] h-[80%] bottom-0 left-[5%]"
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <div className="absolute w-[90%] h-[20%] top-0 left-[5%] flex flex-row font-mono">
          <div className="basis-1/4 p-[10px] leading-none flex flex-col justify-end border-r">
            <div className="text-xs leading-none pb-1">
              #<br />
              01
              <br />
              FLORIST_
            </div>
            <div>
              <Barcode className="w-[112%] h-auto ml-[-6px]" />
            </div>
          </div>
          <div className="basis-3/4 flex flex-col justify-end font-sans">
            <div className="text-7xl border-b px-[10px]">PUFFER</div>
            <div className="text-[7px] p-[10px] leading-none">
              The Re:Bound New Terrain Puffer is made with recycled nylon and
              polyester to create a reversible puffer that adapts to whatever
              terrain you&apos;re hustling through.
            </div>
          </div>
        </div>
        <div className="absolute text-xs font-serif font-light top-[137px] right-[53px]">
          フ<br />ロ<br />リ<br />ス<br />ト
        </div>
      </div>
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Puffy;
