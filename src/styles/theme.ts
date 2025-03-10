import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    blue: '#0500FF',
    blue_10: '#EDEFFB',
    black_neutral: '#1C1C1C',
    gray: '#F0F0F0',
    gray_5: '#F5F5F5',
    gray_10: '#DFDFDF',
    gray_20: '#9E9E9E',
    white: `#ffffff`,
  },
  fontFamily: {
    primary: 'Helvetica, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
  fontSize: {
    small: '16px',
    medium: '20px',
    large: '24px',
  },
  fontWeight: {
    light: 300,
    medium: 400,
    regular: 500,
    semibold: 600,
    bold: 700,
  },
  border: {
    small: '1px',
    medium: '1.5px',
  },
  borderRadius: {
    medium: '8px',
    full: '100%',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
  boxShadow: {
    soft: '0 1px 2px rgba(0, 0, 0, 0.2)',
    medium: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  maxWidth: '1024px',
  // Spacing
  spacing: {
    small: '4px',
    small_10: '8px',
    regular: '16px',
    regular_10: '20px',
    regular_20: '28px',
    medium: '32px',
    medium_10: '40px',
    medium_20: '60px',
    medium_30: '80px',
  },
};
