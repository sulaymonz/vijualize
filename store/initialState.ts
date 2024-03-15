const initialState = {
  exercise: {
    key: 1,
    activeColor: {
      name: 'Красный',
      cssRgbaValue: 'rgba(255, 0, 0, 255)',
      r: 255,
      g: 0,
      b: 0,
      a: 255,
    },
    activeTool: 'fill',
    palette: ['606c38', '283618', 'fefae0', 'dda15e', 'bc6c25'],
    paletteIndex: 0,
  },
  landing: {
    category: 'Outfit',
    palette: [
      { hex: '#07beb8', h: 178, s: 96, v: 74 },
      { hex: '#3dccc7', h: 177, s: 70, v: 80 },
      { hex: '#68d8d6', h: 178, s: 51, v: 84 },
      { hex: '#9ceaef', h: 183, s: 34, v: 93 },
      { hex: '#c4fff9', h: 173, s: 23, v: 100 },
    ],
  },
};

export default initialState;
