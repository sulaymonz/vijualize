'use client';

import { useSelector, useDispatch } from 'react-redux';
import * as landingActions from '../../../store/actions/landingActions';
import RefreshIcon from '@mui/icons-material/Refresh';
import Sidebar from './Sidebar';
import VizuCanvas from '../VizuCanvas';
import {
  generateMonochromePalette,
  generateAnalogousPalette,
  generateSquarePalette,
  generateTetradicPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from '@/app/utils/paletteGenerators';
import { HSVtoRGB, RGBtoHEX } from '@/app/utils/converters';
import { getRandomInt } from '@/app/utils/randomizers';

export default function Landing() {
  const { palette } = useSelector((state) => state.landing);
  const dispatch = useDispatch();

  const images = [
    // {
    //   src: '/images/vizu/0-color-normal-100.png',
    //   layerType: 'dynamic_color',
    // },
    {
      src: '/images/vizu/1-skin-normal-100.png',
      layerType: 'normal',
    },
    {
      src: '/images/vizu/2-color-normal-100.png',
      layerType: 'dynamic_color',
    },
    {
      src: '/images/vizu/3-color-normal-100.png',
      layerType: 'dynamic_color',
    },
    {
      src: '/images/vizu/4-color-normal-100.png',
      layerType: 'dynamic_color',
    },
    {
      src: '/images/vizu/5-color-normal-100.png',
      layerType: 'dynamic_color',
    },
    {
      src: '/images/vizu/6-shadow-multiply-30.png',
      layerType: 'multiply',
    },
    {
      src: '/images/vizu/7-light-screen-60.png',
      layerType: 'screen',
    },
    {
      src: '/images/vizu/last-outline.png',
      layerType: 'normal',
    },
  ];

  return (
    <section className="flex rounded-3xl shadow-md min-h-[calc(100vh-164px)] lg:min-h-[calc(100vh-190px)] overflow-hidden">
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
                      }));
                      break;
                    case 1:
                      newPalette = generateAnalogousPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                      }));
                      break;
                    case 2:
                      newPalette = generateTetradicPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                      }));
                      break;
                    case 3:
                      newPalette = generateSquarePalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
                      }));
                      break;
                    case 4:
                      newPalette = generateSplitComplementaryPalette().map(
                        (hsv) => ({
                          hex: RGBtoHEX(HSVtoRGB(hsv)),
                        }),
                      );
                      break;
                    case 5:
                      newPalette = generateTriadicPalette().map((hsv) => ({
                        hex: RGBtoHEX(HSVtoRGB(hsv)),
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
        <div className="w-1/2 flex flex-col justify-center items-center font-mono">
          <VizuCanvas images={images} />
        </div>
      </div>
    </section>
  );
}
