// Monochromatic Color Scheme
//
// Pattern#1
// - roughly same hue (around same random number)
// range between 0-10 (use gauss distribution with peak on 0)
// - gradually increasing/decreasing saturation
// (the range is picked randomly)
// - gradually increasing/decreasing brightness
// (the range is picked randomly)
//
// Pattern#2
// same as Pattern#1, but the brightness is also
// roughly the same
//
// then after generating the color there should be different
// ways of sorting them, like sorting by saturation or
// brightness ascending/descenting, or dark/light at center

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getGaussianRandomInt = (min, max, skew = 1) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = getGaussianRandomInt(min, max, skew);
  // resample between 0 and 1 if out of range
  else {
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
  }
  return Math.floor(num);
};

export const generateMonochromePalette = (n) => {
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
  // console.log({ sRange, vRange, minS, maxS, minV, maxV });
  const reverseV = getRandomInt(0, 1);
  for (let i = 0; i < n; i++) {
    palette.push({
      h,
      s: Math.floor(minS + i * (sRange / (n - 1))),
      v: Math.floor(
        reverseV
          ? maxV - i * (vRange / (n - 1))
          : minV + i * (vRange / (n - 1)),
      ),
    });
  }
  return palette;
};

// export const generateMonochromePalette = (n) => {
//   const palette = [];
//   let sRange, minS, maxS, vRange, minV, maxV;
//   const h = getRandomInt(0, 359);
//   vRange = 30;
//   minV = getRandomInt(25, 100 - vRange);
//   maxV = minV + vRange;
//   sRange = 15;
//   minS = getRandomInt(0, 100 - sRange);
//   maxS = minS + sRange;
//   // console.log({ sRange, vRange, minS, maxS, minV, maxV });
//   const reverseV = getRandomInt(0, 1);
//   for (let i = 0; i < n; i++) {
//     palette.push({
//       h,
//       s: Math.floor(minS + i * (sRange / (n - 1))),
//       v: Math.floor(
//         reverseV
//           ? maxV - i * (vRange / (n - 1))
//           : minV + i * (vRange / (n - 1)),
//       ),
//     });
//   }
//   return palette;
// };
