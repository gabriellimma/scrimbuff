/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import device from '../../utils/devices';

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  list-style-type: none;

  background: ${(props) => props.theme.colors.darkgray};
  border-left: 5px solid ${(props) => props.theme.colors.red};
  border-radius: 0 4px 4px 0;

  margin-bottom: 20px;
  /* padding: 6px 5% 6px; */

  width: 100%;
  height: 140px;

  transition: transform 0.2s;
  transition: border-left 0.85 linear;

  &:hover {
    transform: translateX(6px);
    border-left: 5px solid ${(props) => props.theme.colors.lightblue};
  }
  /*  the first Li */
  & li:nth-child(1) {
    word-wrap: break-word;
    text-align: center;
  }

  /*  the second Li */

  & li:nth-child(2) {
    word-wrap: break-word;
    color: ${(props) => props.theme.colors.lightgray};
  }

  /*  the third Li */
  & li:nth-child(3) {
    width: 85%;
    word-wrap: break-word;
    font-weight: italic;
  }

  /* styles to all li */
  li {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }

  @media ${device.tablet} {
    max-width: 230px;

    margin-right: 10px;
  }

  @media ${device.laptopL} {
    max-width: 300px;
  }
`;
