'use client';

import { HEXtoRGB, RGBtoHSV } from '../utils/converters';

export default function colorLab() {
  const paletteSet = [
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

  return (
    <div className="container mx-auto pb-20 w-[50vw]">
      <h1 className="my-5 text-3xl text-center">Color_Lab</h1>
      <div>
        {paletteSet.map((palette) => (
          <div
            key={`palette-${palette[0]}`}
            className="flex flex-row justify-evenly my-5"
          >
            {palette.map((color) => {
              const hsv = RGBtoHSV(HEXtoRGB(`#${color}`));
              return (
                <div
                  key={color}
                  className="w-full flex flex-col text-center text-xs font-mono"
                >
                  <div
                    className="h-48 mb-1"
                    style={{ backgroundColor: `#${color}` }}
                  />
                  <div>H:{hsv.h}</div>
                  <div>S:{hsv.s}</div>
                  <div>B:{hsv.v}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
