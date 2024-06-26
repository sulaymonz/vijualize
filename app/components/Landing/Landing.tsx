'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as landingActions from '../../../store/actions/landingActions';
import RefreshIcon from '@mui/icons-material/Refresh';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
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
  const { palette, liked, undoStack, redoStack } = useSelector(
    (state) => state.landing,
  );
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
      name: 'Puffy',
      id: 'puffy1',
    },
    {
      name: 'Snowboarder',
      id: 'snowboarder1',
    },
    {
      name: 'Sneaker',
      id: 'sneaker1',
    },
    {
      name: 'Vibes',
      id: 'vibes1',
    },
  ];

  return (
    <section className="flex rounded-3xl border h-[680px] overflow-hidden">
      <div className="flex-none w-[130px] bg-[#f7f7f7]">
        <Sidebar />
      </div>
      <div className="grow flex flex-row">
        <div className="w-1/2 flex flex-col justify-center gap-8 items-center bg-[#f7f7f7]">
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
            <div className="relative w-80 h-48">
              <div className="flex flex-col w-full h-full rounded-3xl shadow-md overflow-hidden">
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
              <div className="absolute bottom-0 left-full mx-2 flex flex-col">
                <button
                  title="Like"
                  className="h-[13px] my-[2px]"
                  onClick={() => {
                    dispatch(landingActions.landingLikeButtonClicked());
                  }}
                >
                  {liked ? (
                    <FavoriteOutlinedIcon
                      style={{ width: '13px', height: '13px' }}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      style={{ width: '13px', height: '13px' }}
                    />
                  )}
                </button>
                <button title="Settings" className="h-[13px] my-[2px]">
                  <SettingsOutlinedIcon
                    style={{ width: '13px', height: '13px' }}
                  />
                </button>
                <button title="Share" className="h-[13px] my-[2px]">
                  <ShareOutlinedIcon
                    style={{ width: '13px', height: '13px' }}
                  />
                </button>
                <button title="Maximize" className="h-[13px] mt-[2px] mb-2">
                  <FullscreenOutlinedIcon
                    style={{ width: '13px', height: '13px' }}
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center my-8 font-mono">
              <div className="relative">
                <button
                  className="h-[21px] px-2 bg-black rounded-sm text-white"
                  // className="text-lg"
                  title="Regenerate"
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
                  {/* <RefreshIcon fontSize="small" /> */}
                  regenerate_
                </button>
                <div className="absolute top-0 left-full flex">
                  <button
                    className="mx-1"
                    title="Shuffle"
                    onClick={() => {
                      dispatch(
                        landingActions.landingPaletteUpdated(
                          shuffleArray(palette),
                        ),
                      );
                    }}
                  >
                    <ShuffleOutlinedIcon fontSize="small" />
                  </button>
                  <button
                    className="mx-1"
                    title="Undo"
                    onClick={() => {
                      dispatch(landingActions.landingUndoClicked());
                    }}
                    disabled={undoStack.length === 0}
                    style={undoStack.length === 0 ? { opacity: '0.3' } : {}}
                  >
                    <UndoOutlinedIcon fontSize="small" />
                  </button>
                  <button
                    className="mx-1"
                    title="Redo"
                    onClick={() => {
                      dispatch(landingActions.landingRedoClicked());
                    }}
                    disabled={redoStack.length === 0}
                    style={redoStack.length === 0 ? { opacity: '0.3' } : {}}
                  >
                    <RedoOutlinedIcon fontSize="small" />
                  </button>
                </div>
              </div>
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
