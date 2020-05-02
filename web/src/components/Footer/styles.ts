/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  border-top: 1px solid ${(props) => props.theme.colors.red};
  background: ${(props) => lighten(0.1, props.theme.colors.background)};

  p {
    font-family: Roboto, sans-serif;
    font-weight: italic;

    a {
      text-decoration: none;
      color: #fff;
      cursor: pointer;

      &:active,
      &:visited {
        color: #fff;
      }
    }

    svg {
      margin: 0 6px;
    }
  }
`;
