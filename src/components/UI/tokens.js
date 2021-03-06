export const tokens = {
  colors: {
    primary100: '#eafce7',
    primary200: '#c3f8bc',
    primary300: '#a4f49b',
    primary400: '#86f079', // main primary color
    primary500: '#64b45b',
    primary600: '#43783c',
    primary700: '#0c1e09',

    white: '#fff',
    lightGrey: '#CECECE',
    mediumGrey: '#7E7E7E',
    darkGray: '#464646',
    black: '#111',
  },

  fontSize: {
    100: 100, // not used yet
    300: 300, // not used yet
    400: 400,
    700: 700,
    900: 900,
  },
};

export const fonts = {
  h1: {
    fontSize: '3rem',
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[100],
  },

  h2: {
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[700],
  },

  h3: {
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[900],
  },

  // This is the default font used in the site
  body: {
    fontWeight: tokens.fontSize[400],
    fontSize: '18px',
    letterSpacing: '-1px',
  },

  button: {
    fontWeight: tokens.fontSize[700],
    fontSize: '20px',
    letterSpacing: '-1px',
  },

  bigTitle: {
    fontWeight: tokens.fontSize[900],
    fontSize: '128px',
    letterSpacing: '2px',
  },

  title: {
    fontWeight: tokens.fontSize[900],
    fontSize: '64px',
    letterSpacing: '2px',
  },

  regular20: {
    fontWeight: tokens.fontSize[400],
    fontSize: '20px',
    letterSpacing: 0,
  },

  regular24: {
    fontWeight: tokens.fontSize[400],
    fontSize: '24px',
    letterSpacing: '-1px',
  },

  bold24: {
    fontWeight: tokens.fontSize[700],
    fontSize: '24px',
    letterSpacing: '2px',
  },

  bold32: {
    fontWeight: tokens.fontSize[700],
    fontSize: '32px',
    letterSpacing: '-1px',
  },

  bold48: {
    fontWeight: tokens.fontSize[700],
    fontSize: '48px',
    letterSpacing: '2px',
  },

  black32: {
    fontWeight: tokens.fontSize[900],
    fontSize: '32px',
    letterSpacing: '-1px',
  },

  black48: {
    fontWeight: tokens.fontSize[900],
    fontSize: '48px',
    letterSpacing: '1px',
  },
};
