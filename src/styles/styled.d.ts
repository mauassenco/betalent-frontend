import {} from 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    //Colors
    colors: {
      blue: string;
      blue_10: string;
      black_neutral: string;
      gray: string;
      gray_5: string;
      gray_10: string;
      gray_20: string;
      white: string;
    };
    //Fonts
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      light: number;
      medium: number;
      regular: number;
      semibold: number;
      bold: number;
    };
    // Borders
    border: {
      small: string;
      medium: string;
    };
    borderRadius: {
      medium: string;
      full: string;
    };
    // Shadows
    boxShadow: {
      soft: string;
      medium: string;
    };
    // Breakpoints
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    maxWidth: string;
    // Spacing
    spacing: {
      small: string;
      small_10: string;
      regular: string;
      regular_10: string;
      regular_20: string;
      medium: string;
      medium_10: string;
      medium_20: string;
      medium_30: string;
    };
  }
}
