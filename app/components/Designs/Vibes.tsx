'use client';

import { useSelector } from 'react-redux';
import VizuCanvas from '../VizuCanvas';
import { HSVtoRGB } from '@/app/utils/converters';

const images = [
  {
    src: '/images/vibes/1-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/vibes/2-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 4,
  },
  {
    src: '/images/vibes/3-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 0,
  },
  {
    src: '/images/vibes/4-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 2,
  },
  {
    src: '/images/vibes/5-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/vibes/6-static.png',
    layerType: 'outline_on_bg',
    bgColorIndex: 3,
  },
  {
    src: '/images/vibes/7-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/vibes/8-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 3,
  },
  {
    src: '/images/vibes/9-dynamic.png',
    layerType: 'dynamic_color',
    colorIndex: 1,
  },
  {
    src: '/images/vibes/10-static.png',
    layerType: 'normal',
  },
  {
    src: '/images/vibes/11-static.png',
    layerType: 'normal',
  },
];

const Vibes = ({ inLoadingZone, id }) => {
  const { palette } = useSelector((state) => state.landing);
  const { r, g, b } = HSVtoRGB({ h: palette[4].h, s: 5, v: 97 });
  return (
    <div className="relative h-full aspect-[5/6]">
      {inLoadingZone ? <VizuCanvas designId={id} images={images} /> : ''}
    </div>
  );
};

export default Vibes;
