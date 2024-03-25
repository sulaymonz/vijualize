'use client';

import { useSelector, useDispatch } from 'react-redux';
import * as landingActions from '../../../store/actions/landingActions';
import RefreshIcon from '@mui/icons-material/Refresh';
import Sidebar from './Sidebar';
import VizuCanvas from '../VizuCanvas';
import {
  generateMonochromePalette,
  generateTetradicPalette,
} from '@/app/utils/paletteGenerators';
import { HSVtoRGB, RGBtoHEX } from '@/app/utils/converters';

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
    <section className="flex border-[1px] rounded-lg min-h-[calc(100vh-164px)] lg:min-h-[calc(100vh-190px)] overflow-hidden">
      <div className="flex-none w-[130px]">
        <Sidebar />
      </div>
      <div className="grow flex flex-row">
        <div className="w-1/2 flex flex-col justify-center gap-8 items-center">
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
            <div className="w-80 h-32 flex flex-row justify-center gap-2">
              <div
                className="w-1/5 h-full rounded-full shadow-lg"
                style={{ backgroundColor: palette[0].hex }}
              />
              <div
                className="w-1/5 h-full rounded-full shadow-lg"
                style={{ backgroundColor: palette[1].hex }}
              />
              <div
                className="w-1/5 h-full rounded-full shadow-lg"
                style={{ backgroundColor: palette[2].hex }}
              />
              <div
                className="w-1/5 h-full rounded-full shadow-lg"
                style={{ backgroundColor: palette[3].hex }}
              />
              <div
                className="w-1/5 h-full rounded-full shadow-lg"
                style={{ backgroundColor: palette[4].hex }}
              />
            </div>
            <div className="flex flex-row justify-center my-8 text-lg font-mono cursor-pointer">
              <RefreshIcon fontSize="large" />
              <button
                onClick={() => {
                  const newPalette = generateTetradicPalette().map(
                    // (hsv) => ({ hex: RGBtoHEX(HSVtoRGB(hsv)) }),
                    (hsv) => {
                      // console.log(hsv);
                      return { hex: RGBtoHEX(HSVtoRGB(hsv)) };
                    },
                  );
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
          <div className="w-full flex flex-row justify-center items-center h-[5px]">
            <div
              className={`w-[100px] h-full`}
              style={{ backgroundColor: `${palette[0].hex}` }}
            />
            <div
              className={`w-[100px] h-full`}
              style={{ backgroundColor: `${palette[1].hex}` }}
            />
            <div
              className={`w-[100px] h-full`}
              style={{ backgroundColor: `${palette[2].hex}` }}
            />
            <div
              className={`w-[100px] h-full`}
              style={{ backgroundColor: `${palette[3].hex}` }}
            />
            <div
              className={`w-[100px] h-full`}
              style={{ backgroundColor: `${palette[4].hex}` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
