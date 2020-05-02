import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props): string => props.theme.colors.background};
    font-size: 14px;
    color: ${(props): string => props.theme.colors.white};
    font-family: Roboto, sans-serif;

    -webkit-font-smoothing: antialiased;
  }

  #scrimbuff {
    min-height: 100vh;
  }


  button {
    cursor: pointer;
  }
`;
