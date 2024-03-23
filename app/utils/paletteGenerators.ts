import { getRandomInt } from './randomizers.ts';

export const generateMonochromePalette = (n) => {
  const palette = [];
  let sRange, minS, maxS, vRange, minV, maxV;
  const h = getRandomInt(0, 360);
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
  }
};