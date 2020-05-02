import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      headerbox: string;

      background: string;
      input: string;
      white: string;
      red: string;
      lightgray: string;
      darkgray: string;
      lightblue: string;
    };
  }
}
