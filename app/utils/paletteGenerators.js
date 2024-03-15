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
  const h = getRandomInt(0, 359);
  const minS = 10;
  const maxS = 40;
  const minV = 45;
  const maxV = 95;
  for (let i = 0; i < n; i++) {
    palette.push({
      h,
      s: Math.floor(minS + i * ((maxS - minS) / (n - 1))),
      v: Math.floor(maxV - i * ((maxV - minV) / (n - 1))),
    });
  }
  return palette;
};
