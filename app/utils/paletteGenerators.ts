import { getRandomInt, shuffleArray } from './randomizers.ts';

export const generateMonochromePalette = (n = 5) => {
  const palette = [];
  let sRange, minS, maxS, vRange, minV, maxV;
  const h = getRandomInt(0, 359);
  do {
    // generating color ranges
    sRange = getRandomInt(0, 100);
    minS = getRandomInt(0, 100 - sRange);
    maxS = minS + sRange;
    vRange = getRandomInt(0, 100);
    minV = getRandomInt(0, 100 - vRange);
    maxV = minV + vRange;
  } while (
    // Ignore the picked ranges if the following
    // conditions met and go regenerate.
    // This is important, so we get a color range with
    // sufficient contrast

    // value (brightness) range shouldn't be too
    // short if it's on the darker side
    // (minV < 25 && vRange < (50 - (minV / 25) * 25)) ||
    (minV < 25 && vRange < 50 - minV) ||
    // and also the saturation and value ranges can't
    // both be too short at the same time
    (vRange < 15 && sRange < 50) ||
    (sRange < 15 && vRange < 30)
  );

  const reverseS = getRandomInt(0, 1);
  for (let i = 0; i < n; i++) {
    palette.push({
      h,
      s: Math.floor(
        reverseS
          ? maxS - i * (sRange / (n - 1))
          : minS + i * (sRange / (n - 1)),
      ),
      v: Math.floor(minV + i * (vRange / (n - 1))),
    });
  }

  const sortingMethod = getRandomInt(0, vRange < 35 && sRange < 35 ? 2 : 9);
  switch (sortingMethod) {
    case 0:
      return palette;
    case 1:
      return palette.reverse();
    case 2:
      return [palette[3], palette[1], palette[0], palette[2], palette[4]];
    case 3:
      return [palette[4], palette[2], palette[0], palette[1], palette[3]];
    case 4:
      return [palette[1], palette[3], palette[4], palette[2], palette[0]];
    case 5:
      return [palette[0], palette[2], palette[4], palette[3], palette[1]];
    case 6:
      return [palette[1], palette[3], palette[4], palette[0], palette[2]];
    case 7:
      return [palette[2], palette[0], palette[4], palette[3], palette[1]];
    case 8:
      return [palette[3], palette[1], palette[0], palette[4], palette[2]];
    case 9:
      return [palette[2], palette[4], palette[0], palette[1], palette[3]];
    default:
      return palette;
    // these sorting methods are actually unaccaptable,
    // should make work for n colors, not only 5
  }
};

export const generateSquarePalette = (n = 5) => {
  const h = getRandomInt(0, 359);
  const hue = [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360];
  const sameSaturation = getRandomInt(0, 2) !== 2;
  const sameBrightness = getRandomInt(0, 2) !== 2;
  const s = getRandomInt(30, 100);
  const v = getRandomInt(60, 100);
  const palette = [];
  for (let i = 0; i < 4; i++) {
    palette.push({
      h: hue[i],
      s: sameSaturation ? s : getRandomInt(20, 100),
      v: sameBrightness ? v : getRandomInt(60, 100),
    });
  }

  // and a separate aproach for the fifth color
  const h5 = hue[getRandomInt(0, 3)];
  let s5, v5;
  const fifthColorMethod = getRandomInt(0, 1);
  if (fifthColorMethod === 0) {
    // dark color
    s5 = getRandomInt(0, 50);
    v5 = getRandomInt(20, 50);
  } else {
    // light color
    s5 = getRandomInt(0, 5);
    v5 = getRandomInt(95, 100);
  }
  palette.push({ h: h5, s: s5, v: v5 });
  return getRandomInt(0, 2) ? shuffleArray(palette) : palette;
};

export const generateAnalogousPalette = () => {
  const h1 = getRandomInt(0, 359);
  const h2 = (h1 + 360 - 30) % 360;
  const h3 = (h2 + 360 + 30) % 360;
  const hue = [h2, h2, h1, h1, h3, h3];
  hue.splice(getRandomInt(0, 5), 1);
  const palette = [];
  for (let i = 0; i < 4; i++) {
    palette.push({
      h: hue[i],
      s: getRandomInt(20, 100),
      v: getRandomInt(60, 100),
    });
  }

  // and a separate aproach for the fifth color
  let s5, v5;
  const fifthColorMethod = getRandomInt(0, 1);
  if (fifthColorMethod === 0) {
    // dark color
    s5 = getRandomInt(0, 50);
    v5 = getRandomInt(20, 50);
  } else {
    // light color
    s5 = getRandomInt(0, 5);
    v5 = getRandomInt(95, 100);
  }
  palette.push({ h: hue[4], s: s5, v: v5 });
  // use this on your main designs
  return getRandomInt(0, 2) ? shuffleArray(palette) : palette;
  // return shuffleArray(palette);
};
