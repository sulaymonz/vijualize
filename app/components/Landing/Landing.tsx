'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as landingActions from '../../../store/actions/landingActions';
import RefreshIcon from '@mui/icons-material/Refresh';
import Sidebar from './Sidebar';
// import Carousel from '../Carousel';
import CanvasCarousel from '../CanvasCarousel';
import {
  generateMonochromePalette,
  generateAnalogousPalette,
  generateSquarePalette,
  generateTetradicPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from '@/app/utils/paletteGenerators';
import { HSVtoRGB, RGBtoHEX } from '@/app/utils/converters';
import { getRandomInt, shuffleArray } from '@/app/utils/randomizers';

export default function Landing() {
  const { palette } = useSelector((state) => state.landing);
  const dispatch = useDispatch();
  const [curSlide, setCurSlide] = useState(0);

  const nextSlide = () => {
    setCurSlide(curSlide < designs.length - 1 ? curSlide + 1 : curSlide);
  };

  const prevSlide = () => {
    setCurSlide(curSlide > 0 ? curSlide - 1 : curSlide);
  };

  const designs = [
    {
      id: 'puffy1',
      images: [
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
      ],
    },
    {
      id: 'sneaker1',
      images: [
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
      ],
    },
    {
      id: 'vibes1',
      images: [
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
      ],
    },
    {
      id: 'snowboarder1',
      images: [
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
      ],
    },
  ];

  return (
    <section className="flex rounded-3xl shadow-md h-[680px] overflow-hidden">
      <div className="flex-none w-[130px] bg-[#f9f9f9]">
        <Sidebar />
      </div>
      <div className="grow flex flex-row">
        <div className="w-1/2 flex flex-col justify-center gap-8 items-center bg-[#f9f9f9]">
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-mono font-bold my-2">Color palette</h1>
            <h3 className="text-lg font-light">
              creation was never more fun before.
              <br />
              Select ideal palettes by visualizing them
              <br />
              on inspiring designs.
            </h3>
          </div>
          <div>
            <div className="flex flex-col w-80 h-48 rounded-3xl shadow-md overflow-hidden">
              <div className="w-full h-1/4 flex flex-row justify-center bg-white font-mono text-[0.65rem]">
                <div className="w-1/5 h-full flex items-center justify-center">
                  {palette[0].hex}
                </div>
                <div className="w-1/5 h-full flex items-center justify-center">
                  {palette[1].hex}
                </div>
                <div className="w-1/5 h-full flex items-center justify-center">
                  {palette[2].hex}
                </div>
                <div className="w-1/5 h-full flex items-center justify-center">
                  {palette[3].hex}
                </div>
                <div className="w-1/5 h-full flex items-center justify-center">
                  {palette[4].hex}
                </div>
              </div>
              <div className="w-full h-3/4 flex flex-row justify-center">
                <div
                  className="w-1/5 h-full"
                  style={{ backgroundColor: palette[0].hex }}
                />
                <div
                  className="w-1/5 h-full"
                  style={{ backgroundColor: palette[1].hex }}
                />
                <div
                  className="w-1/5 h-full"
                  style={{ backgroundColor: palette[2].hex }}
                />
                <div
                  className="w-1/5 h-full"
                  style={{ backgroundColor: palette[3].hex }}
                />
                <div
                  className="w-1/5 h-full"
                  style={{ backgroundColor: palette[4].hex }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-center my-8 text-lg font-mono cursor-pointer">
              <RefreshIcon fontSize="large" />
              <button
                onClick={() => {
                  let newPalette;
                  const colorScheme = getRandomInt(0, 5);
                  switch (colorScheme) {
                    case 0:
                      newPalette = generateMonochromePalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                        h: hsv.h,
                        s: hsv.s,
                        v: hsv.v,
                      }));
                      break;
                    case 1:
                      newPalette = generateAnalogousPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                        h: hsv.h,
                        s: hsv.s,
                        v: hsv.v,
                      }));
                      break;
                    case 2:
                      newPalette = generateTetradicPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                        h: hsv.h,
                        s: hsv.s,
                        v: hsv.v,
                      }));
                      break;
                    case 3:
                      newPalette = generateSquarePalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                        h: hsv.h,
                        s: hsv.s,
                        v: hsv.v,
                      }));
                      break;
                    case 4:
                      newPalette = generateSplitComplementaryPalette().map(
                        (hsv) => ({
                          hex: RGBtoHEX(HSVtoRGB(hsv)),
                          h: hsv.h,
                          s: hsv.s,
                          v: hsv.v,
                        }),
                      );
                      break;
                    case 5:
                      newPalette = generateTriadicPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                        h: hsv.h,
                        s: hsv.s,
                        v: hsv.v,
                      }));
                      break;
                    default:
                      break;
                  }

                  // const newPalette = generateSplitComplementaryPalette().map(
                  //   (hsv) => ({
                  //     hex: RGBtoHEX(HSVtoRGB(hsv)),
                  //   }),
                  // );

                  dispatch(landingActions.landingPaletteUpdated(newPalette));
                }}
              >
                regenerate_
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-4 font-mon font-bold">
          <div className="w-full flex justify-center items-center">
            <div className="w-[500px] h-[600px] overflow-hidden relative">
              {/* <Carousel slides={slides} current={curSlide} /> */}
              <CanvasCarousel slides={designs} current={curSlide} />
            </div>
          </div>
          <div className="w-full h-3 flex justify-center items-center gap-1 text-[8px] leading-[0.75rem]">
            <button
              className="h-full cursor-pointer bg-black text-white w-14 rounded-l-xl rounded-r-md transition duration-[250ms]"
              onClick={prevSlide}
              style={
                curSlide === 0
                  ? {
                      opacity: '0.3',
                      cursor: 'default',
                    }
                  : {}
              }
            >
              L
            </button>
            <div className="w-16 h-1/2 flex justify-center items-center">
              {designs.map((slide, i) => {
                let width = 0;
                if (curSlide === i) {
                  width = 40;
                } else if (Math.abs(curSlide - i) === 1) {
                  width = 8;
                } else if (Math.abs(curSlide - i) === 2) {
                  width = 4;
                }
                return (
                  <div
                    key={slide.id}
                    className="h-full bg-black rounded-xl transition-all duration-[250ms]"
                    style={{
                      width: `${width}px`,
                      margin: width === 0 ? 'auto 0px' : 'auto 2px',
                    }}
                  />
                );
              })}
            </div>

            <button
              className="h-full cursor-pointer bg-black text-white w-14 rounded-r-xl rounded-l-md duration-[250ms]"
              onClick={nextSlide}
              style={
                curSlide === designs.length - 1
                  ? {
                      opacity: '0.3',
                      cursor: 'default',
                    }
                  : {}
              }
            >
              R
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
