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
      { hex: '#d6c9a9', h: 43, s: 35, v: 75 },
      { hex: '#e8ad23', h: 42, s: 81, v: 52 },
      { hex: '#f7db99', h: 42, s: 85, v: 78 },
      { hex: '#faf7f0', h: 42, s: 50, v: 96 },
      { hex: '#c7998d', h: 12, s: 34, v: 67 },
    ],
  },
};

export default initialState;
