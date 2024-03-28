'use client';

import { HEXtoRGB, RGBtoHEX, RGBtoHSV, HSVtoRGB } from '../utils/converters';
import {
  generateMonochromePalette,
  generateAnalogousPalette,
  generateSquarePalette,
  generateTetradicPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from '../utils/paletteGenerators';
import { getRandomInt } from '../utils/randomizers';

export default function colorLab() {
  const paletteSet1 = [
    ['e9f5db', 'cfe1b9', 'b5c99a', '97a97c', '87986a', '718355'],
    ['a1cca5', '8fb996', '709775', '415d43', '111d13'],
    ['ffe5ec', 'ffc2d1', 'ffb3c6', 'ff8fab', 'fb6f92'],
    ['00b9ae', '037171', '03312e', '02c3bd', '009f93'],
    ['07beb8', '3dccc7', '68d8d6', '9ceaef', 'c4fff9'],
    ['00a6fb', '0582ca', '006494', '003554', '051923'],
    ['595959', '7f7f7f', 'a5a5a5', 'cccccc', 'f2f2f2'],
    ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee'],
    ['f4dbd8', 'bea8a7', 'c09891', '775144', '2a0800'],
    ['352208', 'e1bb80', '7b6b43', '685634', '806443'],
    ['b9d6f2', '061a40', '0353a4', '006daa', '003559'],
    ['022f40', '38aecc', '0090c1', '183446', '046e8f'],
    ['03b5aa', '037971', '023436', '00bfb3', '049a8f'],
    ['410b13', 'cd5d67', 'ba1f33', '421820', '91171f'],
    ['274060', '335c81', '65afff', '1b2845', '5899e2'],
    ['f6f6f6', 'e8e8e8', '333333', '990100', 'b90504'],
    ['e4b1ab', 'fbc3bc', 'fde1de', 'fef0ef', 'ffffff'],
    ['f8f9fb', 'e1ecf7', 'aecbeb', '83b0e1', '71a5de'],
  ];

  const paletteSet2 = [];
  for (let i = 0; i < 50; i++) {
    let newPalette;
    const colorScheme = getRandomInt(0, 5);
    switch (colorScheme) {
      case 0:
        newPalette = generateMonochromePalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      case 1:
        newPalette = generateAnalogousPalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      case 2:
        newPalette = generateTetradicPalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      case 3:
        newPalette = generateSquarePalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      case 4:
        newPalette = generateSplitComplementaryPalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      case 5:
        newPalette = generateTriadicPalette().map((hsv) => ({
          ...hsv,
          hex: RGBtoHEX(HSVtoRGB(hsv)),
        }));
        break;
      default:
        break;
    }
    paletteSet2.push(newPalette);

    // paletteSet2.push(
    //   generateSplitComplementaryPalette().map((hsv) => ({
    //     ...hsv,
    //     hex: RGBtoHEX(HSVtoRGB(hsv)),
    //   })),
    // );
  }

  return (
    <div className="container mx-auto pb-20 w-[50vw] bg-[#f9f9f9]">
      <h1 className="my-5 text-3xl text-center">Color_Lab</h1>
      <div className="flex flex-col gap-5">
        {paletteSet2.map((palette) => (
          <div
            key={`palette-${palette[0].hex}`}
            className="flex flex-col w-full h-52 rounded-2xl shadow overflow-hidden"
          >
            <div className="w-full h-1/4 flex flex-row justify-center bg-white font-mono text-[0.65rem]">
              <div
                suppressHydrationWarning
                className="w-1/5 h-full flex items-center justify-center text-center"
              >
                {palette[0].hex}
                <br />
                H:{palette[0].h} S:{palette[0].s} B:{palette[0].v}
              </div>
              <div
                suppressHydrationWarning
                className="w-1/5 h-full flex items-center justify-center text-center"
              >
                {palette[1].hex}
                <br />
                H:{palette[1].h} S:{palette[1].s} B:{palette[1].v}
              </div>
              <div
                suppressHydrationWarning
                className="w-1/5 h-full flex items-center justify-center text-center"
              >
                {palette[2].hex}
                <br />
                H:{palette[2].h} S:{palette[2].s} B:{palette[2].v}
              </div>
              <div
                suppressHydrationWarning
                className="w-1/5 h-full flex items-center justify-center text-center"
              >
                {palette[3].hex}
                <br />
                H:{palette[3].h} S:{palette[3].s} B:{palette[3].v}
              </div>
              <div
                suppressHydrationWarning
                className="w-1/5 h-full flex items-center justify-center text-center"
              >
                {palette[4].hex}
                <br />
                H:{palette[4].h} S:{palette[4].s} B:{palette[4].v}
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
        ))}
      </div>
    </div>
  );
}
